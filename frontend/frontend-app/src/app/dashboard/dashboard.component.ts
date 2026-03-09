import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: any[] = [];
  products: any[] = [];
  loadingUsers = false;
  loadingProducts = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  loadUsers(): void {
    this.error = null;
    this.loadingUsers = true;
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loadingUsers = false;
      },
      error: () => {
        this.error = 'Failed to load users.';
        this.loadingUsers = false;
      }
    });
  }

  loadProducts(): void {
    this.error = null;
    this.loadingProducts = true;
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loadingProducts = false;
      },
      error: () => {
        this.error = 'Failed to load products.';
        this.loadingProducts = false;
      }
    });
  }
}

