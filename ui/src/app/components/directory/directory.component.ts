import { Component, OnInit } from '@angular/core';
import { FileResult } from 'src/app/models/file-result.model';
import { BrowserService } from 'src/app/services/browser.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.sass']
})
export class DirectoryComponent implements OnInit {
  fileResults: FileResult[] = []
  currentDir: String = '/'

  constructor(private browserService: BrowserService) { }

  ngOnInit(): void {
    this.files()
  }

  files(path?: String): FileResult[] | void {
    this.browserService
      .list(path)
      .subscribe((response: any) => {
        this.fileResults = response
      })
  }

  openDirectory(file: FileResult) {
    console.log(file.path)
    if (file.isDirectory) {
      this.currentDir = file.path || ''
      this.files(file.path)
    }
  }

  up() {
    const currentDir = this.currentDir.split('/')
    currentDir.pop()
    const parentDir = currentDir.join('/')

    this.files(parentDir)
    this.currentDir = parentDir
  }
}
