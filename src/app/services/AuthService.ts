import { HttpService } from "./HttpService";

export class AuthService {
    public static async login(email: string, password: string): Promise<boolean> {
        try {
            const response = await HttpService.post('/login', { email, password });

            localStorage.setItem('token', response.token);
            return true; 
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            return false; 
        }
    }

    public static logout(): void {
        localStorage.removeItem('token');
    }

    public static isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        return !!token; 
    }
}
