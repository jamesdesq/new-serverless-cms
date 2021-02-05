import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContentFlattenerService } from '../services/content-flattener.service';
import { ContentfulService } from '../services/contentful.service';
import { IncludesFinderService } from '../services/includes-finder.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  public content = {
    title: '',
    bodyText: [],
    articleImage: '',
    date: null
  };

  constructor(
    private router: Router,
    private contentfulService: ContentfulService,
    private includesFinderService: IncludesFinderService,
    private contentFlattenerService: ContentFlattenerService,
    private titleService: Title
  ) { }

  ngOnInit(): void {



    const url = this.router.url;

    const search = url.substr(1);

    const contentType = 'page'
    
    this.contentfulService.getContentItemByUrl(search, contentType).subscribe(data => {

      console.log(data);
      
      let assets = {};

      let entries = {};

      if (data.includes) {
        // Get the images out so they're easy to use elsewhere
        assets = this.includesFinderService.assetFlipper(data.includes);
        // Get embedded entries (like cards etc) out
        entries = this.includesFinderService.entryFlipper(data.includes);        
      }

      const content = data && data.items && data.items[0] ? data.items[0] : null;

      if (content) {

        if (content.fields) {
          this.content.title = content.fields.title;
          this.titleService.setTitle(content.fields.title);

          console.log(content.fields.body);
          if (content.fields.body && content.fields.body.content) {

            this.content.bodyText = content.fields.body.content.map(data => {
               return this.contentFlattenerService.flatten(data, assets, entries); 
            });            
          }
        }
        if (content && content.sys) {
          this.content.date = content.sys.createdAt;
        }
      }
      else {
        this.router.navigateByUrl('/page-not-found');
      }
    });
  }

}
