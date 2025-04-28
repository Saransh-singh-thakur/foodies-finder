from django.http import HttpResponse
from django.shortcuts import render
from django.urls import path


def aboutus(request):
    return HttpResponse("i am saransh singh ,welcome to foodies finder website")



def forthpage(request):
    return render(request, 'forthpage.html')

