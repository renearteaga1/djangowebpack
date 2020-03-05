from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'name' : 'Django with webpack',
    }
    return render(request, 'index/index.html', context)