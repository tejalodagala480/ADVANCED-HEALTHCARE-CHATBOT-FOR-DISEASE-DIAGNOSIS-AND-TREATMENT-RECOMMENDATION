from django.shortcuts import render, redirect
from userapp.models import userModel
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'mainapp/main-home.html')

def about(request):
   return render(request, 'mainapp/main-about.html')

def contact(request):
   return render(request, 'mainapp/main-contact.html')

def register(request):
    if request.method == "POST" and request.FILES["image"]:
        name = request.POST.get("fullname")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        address = request.POST.get("address")   
        password = request.POST.get("pwd")
        image = request.FILES["image"]
        userModel.objects.create(name=name, email=email, phone = phone, address= address,password = password, image=image)
        messages.success(request, 'You have successfully registered!')  
        return redirect("user_login")
    return render(request, 'mainapp/main-user-register.html')

def user_login(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("pwd")
        print(email,password)
        try:
            user = userModel.objects.get(email=email, password=password)
            messages.success(request, 'User has successfully logged in!')
            request.session["sno"] = user.sno
            return redirect("user_dash")
        except:
            return redirect("user_login")
    return render(request, 'mainapp/main-user-login.html')