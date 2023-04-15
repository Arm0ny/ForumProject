<!-- Improved compatibility of back to top link: See: https://github.com/Arm0ny/ForumProject/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  

  <h3 align="center">My Forum</h3>

  <p align="center">
    An Awesome full-stack Forum made using Angular and Laravel
    <br />
    <a href="https://github.com/Arm0ny/ForumProject"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Arm0ny/ForumProject">View Demo</a>
    ·
    <a href="https://github.com/Arm0ny/ForumProject/issues">Report Bug</a>
    ·
    <a href="https://github.com/Arm0ny/ForumProject/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


### Built With


* [![Angular][Angular.io]][Angular-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Tailwind]][Tailwind]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Download th repo using this command inside terminal
```bash
git clone https://github.com/Arm0ny/ForumProject
```

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

* ng-cli
  ```sh
  npm install -g @angular/cli
  ``` 

* php composer   
  follow the instructions available [here](https://getcomposer.org/download/)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
    ```sh
    git clone https://github.com/Arm0ny/ForumProject
    ```
2. cd inside front-end directory of the project
    ```sh
    cd ForumProject/front-end/
    ```
3. install dependencies
    ```sh
    npm install
    ```
4. serve the application and remember the port it's running on  
**_we will assume it's 4200_**
    ```sh
    ng serve
    ```
5. cd inside forum-api directory
    ```sh
    cd ../forum-api
    ```
6. install php dependencies
    ```sh
    composer install
    ```
7. run the php server and remember the port it's running on  **_we will assume it's on port 8000_**
    ```sh
    php artisan serve
    ```

### Environment Setup

#### Back-end environment

to correctly run the application you need to setup some Laravel environment variables inside the forum-api folder
1. create a new .env file inside the forum-api directory
2. copy and paste the content from the .env.example
3. change the database configuration parameters:
    ```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1     //your db host
    DB_PORT=3306          //your DB port
    DB_DATABASE=forum_api //your DB bame
    DB_USERNAME=root      //DB username
    DB_PASSWORD=          //password of the databse user
    ```
4. add the front-end URL
    ```
    FRONTEND_URL=http://127.0.0.1:4200 //this should be the angural front-end url
    ```
5. add the session data and stateful domains for sanctum configuration
    ```
    SESSION_LIFETIME=120
    SESSION_DOMAIN=127.0.0.1
    SANCTUM_STATEFUL_DOMAINS=127.0.0.1:4200 //the angular front-end URL
    
    ```
6. generate an application key:
    ```shell
   php artisan key:generate
    ```
   
7. run migrations:
    ```shell
    php artisan migrate
    ```
   this will create the databases tables and set up the back-end of the application

#### Front-end environment
now we need to do a few steps to make sure the correct back-end url is configured inside the front-end environment

1. Go to the front-end library
2. open the src/environments folder
3. search for the development folder
4. inside it you should find environment.development.ts file
5. change this line to your back-end url
    ```
    BACKEND_URL : 'your back end url'
    ```
   
### Serving the application

you are don!, now you only need to run two commands to run the application locally:
1. inside forum-api
    ```shell
      php artisan serve
    ```
2.  inside forum front-end
    ```shell
    ng serve
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Arm0ny/ForumProject.svg?style=for-the-badge
[contributors-url]: https://github.com/Arm0ny/ForumProject/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Arm0ny/ForumProject.svg?style=for-the-badge
[forks-url]: https://github.com/Arm0ny/ForumProject/network/members
[stars-shield]: https://img.shields.io/github/stars/Arm0ny/ForumProject.svg?style=for-the-badge
[stars-url]: https://github.com/Arm0ny/ForumProject/stargazers
[issues-shield]: https://img.shields.io/github/issues/Arm0ny/ForumProject.svg?style=for-the-badge
[issues-url]: https://github.com/Arm0ny/ForumProject/issues
[license-shield]: https://img.shields.io/github/license/Arm0ny/ForumProject.svg?style=for-the-badge
[license-url]: https://github.com/Arm0ny/ForumProject/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/armando-pagano-67787916a
[product-screenshot]: img/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Tailwind]: https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=tailwindcss&logoColor=white

