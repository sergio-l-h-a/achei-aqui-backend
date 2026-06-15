
export interface Business {
    id: number;
    name: string;
    description: string;
    category_id: number;
    address: string;
    whatsapp: string;
    image_url?: string;
    schedule?: string;
    user_id: number;
}