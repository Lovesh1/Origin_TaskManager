from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Task

class TaskTests(APITestCase):

    def test_create_task(self):
        url = reverse('task-list-create') 
        data = {'descryption': 'Test task'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Task.objects.count(), 1)
        self.assertEqual(Task.objects.get().descryption, 'Test task')

    def test_get_tasks(self):
        Task.objects.create(descryption='Task 1')
        Task.objects.create(descryption='Task 2')
        url = reverse('task-list-create')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_delete_task(self):
        task = Task.objects.create(descryption='Task to delete')
        url = reverse('task-delete', kwargs={'pk': task.id})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Task.objects.count(), 0)
