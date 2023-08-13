import { HomeComponent } from './Components/home/home.component';
import { UploadComponent } from './Components/upload/upload.component';
import { EdittemplateComponent } from './Components/edittemplate/edittemplate.component';
import { AddtemplateComponent } from './Components/addtemplate/addtemplate.component';
import { TemplateDashboardComponent } from './Components/template-dashboard/template-dashboard.component';
import { TemplateComponent } from './Components/template/template.component';
import { EditfileComponent } from './Components/editfile/editfile.component';
import { AddfiletypeComponent } from './Components/addfiletype/addfiletype.component';
import { EditpatternComponent } from './Components/editpattern/editpattern.component';
import { AddpatternComponent } from './Components/addpattern/addpattern.component';
import { PatternDashboardComponent } from './Components/pattern-dashboard/pattern-dashboard.component';
import { PatternComponent } from './Components/pattern/pattern.component';
import { KeywordDashboardComponent } from './Components/keyword-dashboard/keyword-dashboard.component';
import { AddkeyComponent } from './Components/addkey/addkey.component';
import { KeywordComponent } from './Components/keyword/keyword.component';
import { WelcomeAdminComponent } from './pages/admin/welcome-admin/welcome-admin.component';
import { ContentManagementsComponent } from './pages/admin/content-managements/content-managements.component';
import { AppComponent } from './app.component';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

import { NotfoundComponent } from './Components/notfound/notfound.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { AboutComponent } from './Components/about/about.component';
import { HelpComponent } from './Components/help/help.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/User/user-dashboard/user-dashboard.component';
import { AdmingaurdGuard } from './service/admingaurd.guard';
import { UsergaurdGuard } from './service/usergaurd.guard';
import { ExtractComponent } from './Components/extract/extract.component';
import { EditkeyComponent } from './Components/editkey/editkey.component';
import { FiltypeComponent } from './Components/filtype/filtype.component';
import { FiltypeDashboardComponent } from './Components/filtype-dashboard/filtype-dashboard.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },

  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {

    path:'not',component:NotfoundComponent
  },
  {

    path:'login',component:LoginComponent,pathMatch:'full'
  },
  {

    path:'register',component:RegisterComponent,pathMatch:'full'
  },
  {

    path:'admin',canActivate:[AdmingaurdGuard] ,component:AdminDashboardComponent,
    children:[
      {
        path:'',component:WelcomeAdminComponent
      },
      {
        path:'extract',component:ExtractComponent
      },
      {
        path:'profile',
        component: ProfileComponent,
      },
      {
        path:'about',
        component: AboutComponent,
      },
      {
        path:'help',
        component: HelpComponent,
      },
      {
        path:'cm',component:ContentManagementsComponent
      },
      {
        path:'uploads',component:UploadComponent
      },
      {
        path:'keyword',component:KeywordComponent,children:[
          {
            path:'',component:KeywordDashboardComponent

          },
          {
            path:'addkey',component:AddkeyComponent
          },
          {
            path:'editkey/:id',component:EditkeyComponent
          }
        ]
      },
      {
        path:'pattern',component:PatternComponent,children:[
          {
            path:'',component:PatternDashboardComponent

          },
          {
            path:'addpattern',component:AddpatternComponent
          },
          {
            path:'editpattern/:id',component:EditpatternComponent
          }
        ]
      },
      {
        path:'filetype',component:FiltypeComponent,children:[
          {
            path:'',component:FiltypeDashboardComponent

          },
          {
            path:'addfiletype',component:AddfiletypeComponent
          },
          {
            path:'editfiletype/:id',component:EditfileComponent
          }
        ]
      },
      {
        path:'tem',component:TemplateComponent,children:[
          {
            path:'',component:TemplateDashboardComponent

          },
          {
            path:'addtem',component:AddtemplateComponent
          },
          {
            path:'edittem/:id',component:EdittemplateComponent
          }
        ]
      },

    ],
  },
  {

    path:'user',canActivate:[UsergaurdGuard],component:UserDashboardComponent,pathMatch:'full'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
