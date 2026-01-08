import { Component, signal } from '@angular/core';
import { If } from "./if-directive";
import { For } from './for-directive';
import { Switch } from './switch-directive';
import { Case } from './case-directive';
import { Default } from './default-directive';
import { Class } from './class-directive';
import { Style } from './style-directive';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  imports: [If, For, Switch, Case, Default, Class, Style],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public toggler: boolean = true;
  public items = ['а', 'б', 'в'];
  public status = '';
  public isHighlight: boolean = true;
  public isRedBold: boolean = false;
}
