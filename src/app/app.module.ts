import { authIntercetorProvider } from './service/authInterceptor';
import { RouterModule } from '@angular/router';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'; 
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';

import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from './Components/profile/profile.component';
import { AboutComponent } from './Components/about/about.component';
import { HelpComponent } from './Components/help/help.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/user-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './Components/cards/cards.component';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ContentManagementsComponent } from './pages/admin/content-managements/content-managements.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { WelcomeAdminComponent } from './pages/admin/welcome-admin/welcome-admin.component';
import { ExtractComponent } from './Components/extract/extract.component'; 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { KeywordComponent } from './Components/keyword/keyword.component';
import { AddkeyComponent } from './Components/addkey/addkey.component';
import { KeywordDashboardComponent } from './Components/keyword-dashboard/keyword-dashboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditkeyComponent } from './Components/editkey/editkey.component';
import { PatternComponent } from './Components/pattern/pattern.component';
import { PatternDashboardComponent } from './Components/pattern-dashboard/pattern-dashboard.component';
import { AddpatternComponent } from './Components/addpattern/addpattern.component';
import { EditpatternComponent } from './Components/editpattern/editpattern.component';
import { FiltypeComponent } from './Components/filtype/filtype.component';
import { FiltypeDashboardComponent } from './Components/filtype-dashboard/filtype-dashboard.component';
import { AddfiletypeComponent } from './Components/addfiletype/addfiletype.component';
import { EditfileComponent } from './Components/editfile/editfile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TemplateComponent } from './Components/template/template.component';
import { TemplateDashboardComponent } from './Components/template-dashboard/template-dashboard.component';
import { AddtemplateComponent } from './Components/addtemplate/addtemplate.component';
import { EdittemplateComponent } from './Components/edittemplate/edittemplate.component';
import { UploadComponent } from './Components/upload/upload.component';
import { HomeComponent } from './Components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
   
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
  
    ProfileComponent,
    AboutComponent,
    HelpComponent,
    NotfoundComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    CardsComponent,
    ContentManagementsComponent,
    SidenavComponent,
    WelcomeAdminComponent,
    ExtractComponent,
    KeywordComponent,
    AddkeyComponent,
    KeywordDashboardComponent,
    EditkeyComponent,
    PatternComponent,
    PatternDashboardComponent,
    AddpatternComponent,
    EditpatternComponent,
    FiltypeComponent,
    FiltypeDashboardComponent,
    AddfiletypeComponent,
    EditfileComponent,
    TemplateComponent,
    TemplateDashboardComponent,
    AddtemplateComponent,
    EdittemplateComponent,
    UploadComponent,
    HomeComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
FormsModule,
MatMenuModule,
HttpClientModule,
RouterModule,
MatSidenavModule,
MatDividerModule,
MatCardModule,
MatListModule,
MatTooltipModule,
CKEditorModule,
MatCheckboxModule,
MatSnackBarModule,
MatSlideToggleModule,
FontAwesomeModule
  ],
  providers: [authIntercetorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
