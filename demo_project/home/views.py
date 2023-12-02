from django.shortcuts import render, redirect
from django.http import JsonResponse

# Create your views here.
from .models import Student
from .forms import StudentForm


def index(request):
    students_list = Student.objects.all()
    context = {'students_list': students_list}
    return render(request, 'home/index.html', context=context)


def add_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = StudentForm()
    return render(request, 'home/add_student.html', {'form': form})


def remove_students(request):
    if request.method == 'POST':
        student_ids = request.POST.getlist('student_ids')
        # Delete the selected students
        Student.objects.filter(id__in=student_ids).delete()
        return redirect('home')

    students = Student.objects.all()
    return render(request, 'home/remove_student.html', {'students': students})


def student_list(request):
    students = Student.objects.all()
    data = [{'id': student.id, 'name': student.name, 'roll': student.roll}
            for student in students]
    return JsonResponse(data, safe=False)
