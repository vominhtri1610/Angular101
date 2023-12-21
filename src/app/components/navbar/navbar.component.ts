import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLoggedIn: boolean = true;

  // Hàm xử lý sự kiện đăng nhập
  login() {
    this.isLoggedIn = false;
  }

  // Hàm xử lý sự kiện đăng xuất
  logout() {
    this.isLoggedIn = true;
  }
}
