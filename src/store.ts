import { atom } from 'nanostores';


export enum Pages {
    About = 'about',
    Projects = 'projects',
    OurStory = 'ourStory',
    Stories = 'stories',
    Donate = 'donate'
}

export const $currentPage = atom<Pages>(Pages.About);


export function setCurrentPage(page:Pages){
    $currentPage.set(page);
    console.log('Current Page In Store', $currentPage.get());
};