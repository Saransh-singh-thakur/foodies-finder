from django.shortcuts import render,redirect
from .models import FormData

# Create your views here.


def homepage(request):
    return render(request, 'index.html')




def form_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        option1 = 'option1' in request.POST
        option2 = 'option2' in request.POST
        option3 = 'option3' in request.POST
        college_year = request.POST.get('group1')
        selected_number = request.POST.get('select')

        form_data = FormData(
            username=username,
            option1=option1,
            option2=option2,
            option3=option3,
            college_year=college_year,
            selected_number=selected_number
        )
        form_data.save()
        return render(request, 'form.html', {'message': 'Form data saved successfully!'})

    return render(request, 'form.html')
