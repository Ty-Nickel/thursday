from django.forms import ModelForm
from hollywood.models import Movie, Actor

__author__ = 'tynickel'

class MovieForm(ModelForm):
    class Meta:
        model = Movie

class ActorForm(ModelForm):
    class  Meta:
        model = Actor