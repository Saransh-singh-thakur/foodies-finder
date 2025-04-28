from django.contrib import admin
from .models import FormData
# Register your models here.



@admin.register(FormData)
class FormDataAdmin(admin.ModelAdmin):
    list_display = ('username', 'option1', 'option2', 'option3', 'college_year', 'selected_number')
