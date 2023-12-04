from django.db import models
# subway/models.py

class Station(models.Model):
  name = models.CharField(max_length=120)

  def __str__(self):
    return self.name

class Line(models.Model):
  name = models.CharField(max_length=4)
  hex_color = models.CharField(max_length=6)
  stations = models.ManyToManyField(Station)

  def __str__(self):
    return self.name

class Train(models.Model):
  name = models.CharField(max_length=5)
  cbtc_enabled = models.BooleanField()
  line = models.ForeignKey(Line, on_delete=models.CASCADE, related_name='trains')

  def __str__(self):
    return self.name


# Create your models here.
