# from django.shortcuts import render get rid of thiss
from rest_framework import viewsets
from .serializers import CohortSerializer, StudentSerializer
from .models import Cohort, Student

# Create your views here.

class CohortViewSet(viewsets.ModelViewSet):
    queryset = Cohort.objects.all()
    serializer_class = CohortSerializer
    

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer