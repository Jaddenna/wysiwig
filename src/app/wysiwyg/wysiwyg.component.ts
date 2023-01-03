import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as rangy from 'rangy';
import 'rangy/lib/rangy-classapplier';

@Component({
  selector: 'app-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WysiwygComponent implements OnInit {
  private rangy = rangy as any;
  private appliers: any;
  constructor() {}

  ngOnInit(): void {
    this.rangy.init();

    this.appliers = {
      bold: this.rangy.createClassApplier('bold'),
      italic: this.rangy.createClassApplier('italic'),
      underline: this.rangy.createClassApplier('underline'),
      ulList: this.rangy.createClassApplier('ul-list'),
    };
  }

  createList() {
    this.appliers.ulList.toggleSelection();
    const notQuiteLists = document.querySelectorAll('span.ul-list');

    for (let i = 0; i < notQuiteLists.length; i++) {
      const current = notQuiteLists[i];
      if (current.parentElement == null) continue;

      const childNodes = current.childNodes;

      const ulNode = document.createElement('ul');
      ulNode.classList.add('ul-list');

      current.parentElement.insertBefore(ulNode, current.nextSibling);

      const liNode = document.createElement('li');
      ulNode.appendChild(liNode);

      for (let j = 0; j < childNodes.length; j++) {
        liNode.appendChild(childNodes[j]);
      }

      current.parentElement.removeChild(current);
    }
  }

  apply(style: string) {
    this.appliers[style].toggleSelection();
  }
}
