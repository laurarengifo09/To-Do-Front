export class HttpService {
    static async post(url: string, data: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(`Error en la solicitud POST: ${response.statusText}. Detalles: ${JSON.stringify(responseData)}`);
            }

            return responseData;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error en la solicitud POST: ${error.message}`);
            } else {
                throw new Error(`Error en la solicitud POST: Se produjo un error desconocido.`);
            }
        }
    }

    static async get(url: string): Promise<any> {
        try {
            const response = await fetch(url);

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(`Error en la solicitud GET: ${response.statusText}. Detalles: ${JSON.stringify(responseData)}`);
            }

            return responseData;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error en la solicitud GET: ${error.message}`);
            } else {
                throw new Error(`Error en la solicitud GET: Se produjo un error desconocido.`);
            }
        }
    }
}


