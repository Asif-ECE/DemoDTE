from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='home'),
    path('add_student/', views.add_student, name='add_student'),
    path('remove_students/', views.remove_students, name='remove_student'),
    # api_url
    path('api/student-list', views.student_list, name='student-list')
]
