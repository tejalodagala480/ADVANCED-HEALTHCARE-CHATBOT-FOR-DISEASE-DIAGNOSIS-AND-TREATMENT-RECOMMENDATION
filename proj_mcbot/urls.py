"""
URL configuration for proj_mcbot project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mainapp import views as main_views
from userapp import views as user_views
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns = [
    path('admin/', admin.site.urls),

    #MAIN URLS
    path('', main_views.home, name="home"),
    path('register', main_views.register, name= "register"),
    path('about', main_views.about, name="about"),
    path('contact', main_views.contact, name="contact"),
    path('userlogin', main_views.user_login, name ="user_login" ),

    #USER URLS
    path('user-dashboard', user_views.user_dash, name ="user_dash"),
    path('user-profile', user_views.user_profile, name ="user_profile"),
]+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)