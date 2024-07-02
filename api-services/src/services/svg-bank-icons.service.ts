import path from 'path';
import fs from 'fs';

export class SvgBankIconsService {
    
    async getMainIconsFromJson(jsonPath: string) {
        try {

            const currentWorkingDirectory = process.cwd();
        
            const absolutePath = path.resolve(currentWorkingDirectory, jsonPath);

            const jsonData = fs.readFileSync(absolutePath, 'utf-8');

            const data: { id : number, name: string, icon_url: string }[] = JSON.parse(jsonData);
            
            const mainIcons = data.map(item => ({  
                id: item.id,           
                name: item.name,
                path: item.icon_url,
            }));

            return mainIcons;
        } catch (error) {
            console.error('Error fetching main icons from JSON:', error);
            return [];
        }
    }

}
