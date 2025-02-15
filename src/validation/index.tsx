export const productValidation = (pr: { title: string; description: string; imageUrl: string; price: string }) => {
    const pugs :{title: string; description: string; imageUrl: string; price: string } = {  
        title: '',
        description: '',
        imageUrl: '',
        price: ''
    };
    if(!pr.title.trim() ||pr.title.length<10 || pr.title.length>80){
        pugs.title='product title must be between 10 and 80 characters'
    }
    if(!pr.description.trim() ||pr.description.length<10 || pr.description.length>900){
        pugs.description='Description title must be between 10 and 900 characters'
    }
    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(pr.imageUrl);
    if(!pr.imageUrl.trim() || !validUrl){
        pugs.imageUrl='valid image url is required'
    }
    if(!pr.price.trim() || isNaN(Number(pr.price))){
        pugs.price='price is required'
    }
    return pugs;
};
