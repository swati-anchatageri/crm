     // *append links online
     const appendOnlineLinks = () => {
        const facebookLink = 'https://www.facebook.com/assetsglobalofficial/';
        const instaLink = 'https://www.instagram.com/assetsglobalofficial/';
        const twitterLink = 'https://twitter.com/assetsgofficial';
        const linkedInLink = 'https://www.linkedin.com/company/assets-global-official/';
        const youtubeLink = '';

        var getFacebook = document.getElementsByClassName('facebook--link');
        var getTwitter = document.getElementsByClassName('twitter--link');
        var getInsta = document.getElementsByClassName('insta--link');
        var getLinkedIn = document.getElementsByClassName('linkedin--link');
        var getYoutube = document.getElementsByClassName('youtube--link');

        // Access individual elements in the collection
        for (let i = 0; i < getFacebook.length; i++) {
            getFacebook[i].setAttribute('href', facebookLink);
            getFacebook[i].setAttribute('target', '_blank');
        }

        for (let i = 0; i < getTwitter.length; i++) {
            getTwitter[i].setAttribute('href', twitterLink);
            getTwitter[i].setAttribute('target', '_blank');
        }

        for (let i = 0; i < getInsta.length; i++) {
            getInsta[i].setAttribute('href', instaLink);
            getInsta[i].setAttribute('target', '_blank');
        }

        for (let i = 0; i < getLinkedIn.length; i++) {
            getLinkedIn[i].setAttribute('href', linkedInLink);
            getLinkedIn[i].setAttribute('target', '_blank');
        }

        for (let i = 0; i < getYoutube.length; i++) {
            getYoutube[i].setAttribute('href', youtubeLink);
            getYoutube[i].setAttribute('target', '_blank');
        }
    }

    appendOnlineLinks();
