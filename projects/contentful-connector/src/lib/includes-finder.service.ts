import { Injectable } from '@angular/core';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class IncludesFinderService {

  private assets = {};

  constructor() { }

  assetFlipper(assets: object): object {

    const mapped = {};

    if (assets['Asset']) { 
      assets['Asset'].map(value => {
        mapped[value.sys.id] = value.fields.file.url;
      });      
    }
    return mapped;
  }

  entryFlipper(entries: object): object { 
    const mapped = {};
    
    if (entries['Entry']) { 
      entries['Entry'].map(value => {
        // The type of entry, e.g. a popout card, is stored in a different place from the content.
        const ids = R.path(['sys', 'contentType', 'sys', 'id']); 
        value.fields.entryType = ids(value);
        mapped[value.sys.id] = value.fields;      
      });
    }

    return mapped;
  }
}
