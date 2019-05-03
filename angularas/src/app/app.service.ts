import {Description} from './app.model';

export class DescriptionService{
    description: Description = new Description();

    getDescription(){
        return this.description;
    }

    reset(){
        this.description = new Description();
    }
}
