import { Inject, Injectable } from '@angular/core';
import * as R from 'ramda';
@Injectable({
  providedIn: 'root'
})
export class ContentFlattenerService {

  public assetMap = {};

  public entryMap = {};

  constructor(
    @Inject('env') private environment
  ) { }

  flatten(content: object, assetMap: object, entryMap: object): object { 

    this.assetMap = assetMap;

    this.entryMap = entryMap;

    let flattened = {};

    if (content['nodeType']) { 
      switch (content['nodeType']) { 
        case 'paragraph': 

          flattened = this.flattenParagraph(content);

          break;

        case 'heading-2': 
        case 'heading-3':

          flattened = this.flattenHeading(content);
          break;

        case 'unordered-list':
          
          flattened = this.flattenUnorderedList(content);
          break;

        case 'embedded-asset-block': 

          flattened = this.flattenEmbeddedAssetBlock(content);
          break; 

        case 'embedded-entry-block':
        case 'chart':

          flattened = this.flattenEmbeddedEntryBlock(content);
          break;
      }
    }
    return flattened; 
  }

  getImage(content: object): string {

    let imageUrl = '';

    const path = ['fields', 'image', 'sys', 'id'];
    
    const ids = R.path(path)
    
    imageUrl = ids(content);

    return imageUrl;

  }

  flattenEmbeddedAssetBlock(content: object): object { 
    
    let flattened = {};

    const path = ['data', 'target', 'sys', 'id'];

    const ids = R.path(path);

    if (ids(content)) {
        flattened = {
            type: 'image',
            text: this.assetMap[ids(content)],
        }      
    }

    return flattened;
  }

  flattenHeading(content: object): object { 
    let flattened = {};

      if (content['content'][0]) {
        const holder = content['content'][0];
        flattened = {
            type: content['nodeType'],
            text: holder.value,
        }
      }
    return flattened;
  }

  flattenParagraph(content: object): object { 
      let flattened = {};

      if (content['content'].length === 1) {
        
        const holder = content['content'][0];

        let wholePhrase = '';

        for (const phrase of content['content']) {

          if (phrase.nodeType === 'text' && typeof phrase.value !== 'undefined') {
            wholePhrase += phrase.value;
          }
        }

        holder.value = wholePhrase;
        holder.value = holder.value.split('\n').join('</br>');
        flattened = 
          {
            type: holder.marks.length > 0 ? holder.marks[0].type : 'paragraph',
            text: holder.value,
            style: null,
          }
      } 
      else if (content['content'].length > 1) {
        let wholePhrase = '';

        for (const phrase of content['content']) {
          if (phrase.nodeType === 'text' && typeof phrase.value !== 'undefined') {
            wholePhrase += phrase.value;
          }
          if (phrase.nodeType === 'hyperlink') {
            const link = `<a href="${phrase.data.uri}">${phrase.content[0].value}</a>`;
            wholePhrase += link;
          }
        }
        flattened = 
          {
            type: 'paragraph',
            text: wholePhrase,
            style: null,
          }
      }

      return flattened; 
  }

  flattenEmbeddedEntryBlock(content: object): object { 

    let flattened = {};

    const path = ['data', 'target', 'sys', 'id'];

    const ids = R.path(path);

    const entry = this.entryMap[ids(content)];

    if (entry.entryType) { 
      switch (entry.entryType) { 
        case 'popOutCard':
          const imageIdPath = R.path(['cardImage', 'sys', 'id']);
          entry['cardImage'] = this.assetMap[imageIdPath(entry)] ? this.assetMap[imageIdPath(entry)] : this.environment.defaultImageUrl;
          flattened = {
            type: 'app-popout-card',
            content: entry
          }
          break;

        case 'chart':
          flattened = {
            type: 'bar-overlay',
            content: entry
          }
          break;

        case 'quoteBlock': 

          console.log(entry);
          flattened = { 
            type: 'app-quote-block',
            content: entry,
          }

          break;

      }
    }
    return flattened;
  }

  flattenUnorderedList(content: object): object {

    let flattened = {};

    let markedUp = [];

    if (Array.isArray(content['content'])) { 
      markedUp = content['content'].map(listItem => {
        let phrase = this.flattenParagraph(listItem.content[0]);
        return phrase['text'];
      });
    }
 
    flattened = {
      type: 'unordered-list',
      text: markedUp,
    }

    return flattened;

  }
}
