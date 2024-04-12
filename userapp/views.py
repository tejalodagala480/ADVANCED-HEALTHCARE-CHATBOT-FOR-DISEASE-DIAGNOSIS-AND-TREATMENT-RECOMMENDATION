from django.shortcuts import render
from userapp.models import userModel
# Create your views here.

def user_dash(request):
    return render (request, 'userapp/user-dash.html')

def user_profile(request):
    s_id = request.session["sno"]
    user = userModel.objects.get(sno = s_id)
    if request.method=="POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        address = request.POST.get("address")
        if len(request.FILES)!= 0:
            img = request.FILES["img"]
            user.image = img
            user.name = name
            user.email = email
            user.phone = phone
            user.address = address
            user.save()
        else:
            user.name = name
            user.email = email
            user.phone = phone
            user.address = address
            user.save()
    context = {"user": user}
    # print(fname,email, phone, relation, address, img)
    return render(request, 'userapp/user-myprofile.html', context)