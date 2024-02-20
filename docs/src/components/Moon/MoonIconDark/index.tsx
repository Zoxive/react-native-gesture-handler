import React from 'react';
import styles from './styles.module.css';
import useScreenSize from '@site/src/hooks/useScreenSize';
import BrowserOnly from '@docusaurus/BrowserOnly';

function MoonIconDark() {
  const { windowWidth } = useScreenSize();
  return (
    <BrowserOnly>
      {() => (
        <svg
          className={styles.moon}
          xmlns="http://www.w3.org/2000/svg"
          width={windowWidth * (windowWidth < 1600 ? 1 : 0.7)}
          fill="none"
          viewBox="0 0 1440 466">
          <g clipPath="url(#clip0_254_3093)">
            <path
              fill="#473D68"
              d="M1439.99 25.754C1342.96 8.902 1242.12 0 1138.63 0 667.327 0 250.905 184.282 0 466h1439.99V25.754z"></path>
            <path
              fill="#6A539A"
              d="M1384.5 177.5c-32.44-6.153-50 20.5-50 20.5-33.5 32.5-74.77 3-74.77 3-34.94 27.413-70.95 6.713-70.95 6.713C1150.64 231.767 1107.5 195 1107.5 195s-.4 54.555-102 69.939c-101.601 15.383-119-16.439-119-16.439-16.045 5.594-41-10.5-41-10.5s-12.41 11.526-26.668 16c-18.332 0-36.832-8.5-70.332-8.5-8 0-12.472-1.012-36 8.5-23.528 9.513-24 12-27.5 16.5-5.5 4.187-5.04 21.745-14.31 26.497-9.269 4.756-15.579-10.414-25.563-10.696-9.983-.278-26.382 11.187-41.353 20.977-14.972 9.79-28.282 0-28.282 0-19.984 41.881-91.689 63.983-121.992 66.222-30.303 2.239-47.225-18.553-55.068-15.476-7.843 3.076 16.399 27.855 0 38.483C352 420.049 317.5 376 317.5 376c-107 90-231 90-231 90H1440V215.541s-4.56-28.888-37-35.041l-18.5-3zM928.56 402.529c17.435-28.212 66.352-14.167 66.352-14.167-42.338 31.687-66.352 14.167-66.352 14.167zM491.5 426.5c-25.5-10 141.826-56.953 141.826-56.953C603.774 446.5 491.5 426.5 491.5 426.5zm313.117-27.934c-50.214 7.322-56.139-1.436-61.562-8.062-5.423-6.625-4.188-28.206 42.427-32.48 49.829-4.567 51.039 21.449 51.039 21.449 11.658-3.822 21.121-14.347 21.121-14.347s-2.811 26.118-53.025 33.44zm-.509-64.898c-42.861 6.947-58.987 25.651-58.987 25.651 4.374-8.009 29.739-31.853 73.711-33.815 43.966-1.962 52.658 18.027 52.658 18.027s-24.52-16.805-67.382-9.858v-.005zm525.202 56.831C1170 455 1072.82 400.708 1059.9 363.671c-12.91-37.037 60.6-66.674 60.6-66.674s-30.73 79.716 92.63 74.127c40.61-1.84 63.19-8.928 91.69-21.965 43.82-20.052 36.01-56.675 0-71.659-21.28-8.855-51.13-14.046-89.82-12.561-81.94 3.145-132 27.061-132 27.061 144.56-84.444 259.27-39 282.5-23.313 36 24.313 46.64 82.677-36.19 121.812zM674.5 382c26.5-9.5 15-29 15-29s10 0 15 7.5c3.472 5.208-2 12.5 38.555 2.5 0 0-32.521 25.824-53.555 24.5l-15-5.5zm-289.637 68.66c-20.147 7.892-8.935-8.68-8.935-8.68s.887 4.255 8.271 2.405c7.383-1.85 24.849-12.715 37.842-24.336 0 0-18.831 23.436-37.172 30.616l-.006-.005zM94 432.25s10.462-9.658 27.9-12.072c17.439-2.415 21.538 4.184 21.538 4.184s-2.256-13.036-19.281-13.355c-17.024-.32-28.315 11.103-30.157 21.243zM205.438 334s-10.462 9.658-27.9 12.073c-17.439 2.415-21.538-4.185-21.538-4.185s2.257 13.037 19.281 13.356c17.025.319 28.315-11.104 30.157-21.244zM265.438 312s-10.462 9.658-27.9 12.073c-17.439 2.414-21.538-4.185-21.538-4.185s2.257 13.036 19.281 13.356c17.025.319 28.315-11.104 30.157-21.244z"></path>
            <path
              fill="#6A539A"
              d="M569.682 282.006s-27.494 33.961-81.445 47.799c-53.959 13.843-57.029.179-42.875-18.101 0 0-33.028 19.708-27.801 35.401 5.234 15.692 51.702 7.243 92.321-12.314 40.619-19.552 52.416-39.088 59.8-52.791v.006zM947 100.685s20.102-10.46 36.106-10.46c16.003 0 10.054 8.37 10.054 8.37s12.51-6.599 6.77-15.45c-5.741-8.852-37.541 2.252-52.93 17.54zM651.807 106.111s-4.92-4.588 9.54-10.381c14.461-5.793 25.544-1.933 15.39 7.485-10.155 9.417-24.58 6.65-24.923 2.896h-.007zM853.01 226.972s-.336-6.719 14.076-.807c14.413 5.912 19.679 16.4 5.833 16.088-13.846-.312-22.272-12.344-19.904-15.276l-.005-.005zM611.044 285.576s5.605 3.722-7.714 11.802-24.884 6.085-16.406-4.867c8.478-10.952 23.161-10.581 24.113-6.934l.007-.001zM340.945 368.013s-.382-10.94 22.921-.967c23.303 9.973 31.614 27.166 9.095 26.318-22.519-.848-35.932-20.629-32.008-25.342l-.008-.009zM1084.82 191s.5 20.683-62.4 35.785c-62.909 15.102-94.359 1.962-83.199-24.319 0 0-47.178 14.123-38.048 40.6 9.129 26.477 95.874 11.57 122.257 2.158 29.07-10.369 64.43-21.575 61.39-54.224zM668.164 214s-.452-18.522 55.654-32.046c56.105-13.525 84.155-1.757 74.201 21.778 0 0 42.078-12.648 33.935-36.358-8.142-23.711-85.51-10.362-109.045-1.933-25.923 9.286-57.459 19.321-54.745 48.559zM220.379 377s-5.634 12.37-27.464 29.922c-21.831 17.552-29.8 12.09-29.8 12.09s-3.207 15.423 24.315 1.081c27.522-14.348 34.763-34.118 32.949-43.093z"></path>
            <path
              fill="#6A539A"
              d="M174.533 411.174s7.556-10.566 19.524-16.802c11.969-6.235 21.309-12.425 17.66-14.885-3.649-2.459-30.985 12.42-37.184 31.687zM602.38 198.975s-31.078-16.656-92.628 0c-61.542 16.655-100.626 34.521-113.245 46.112 0 0 11.384-29.21 101.555-59.872 90.164-30.661 111.395-.241 104.318 13.76z"></path>
            <path
              fill="#6A539A"
              d="M577.143 219.496s-30.772 20.835-84.316 35.042c-53.544 14.208-83.394 2.14-53.237-24.902 0 0-56.315 19.799-40.926 44.903 15.389 25.109 133.554-5.07 178.486-55.043h-.007zM1168.51 169.229s-17.43-2.09-5.94-15.126c11.49-13.037 38.97-11.911 50.46-9.014 11.49 2.896 12.72 13.518 4.11 17.541 0 0 4.1-6.69-15.39-6.404-19.49.286-36.72 8.981-33.24 13.003zM1414.4 114.08s1.65 11.428-31.8 11.428c-33.44 0-36.1-14.969-36.1-14.969s-23.18-.482-27.7 2.415c-4.51 2.896 2.47 19.473 42.47 21.888 40.01 2.414 62.37-3.703 53.14-20.762h-.01zM1287.8 60.57S1289.44 72 1256 72s-36.11-14.97-36.11-14.97-23.18-.482-27.69 2.414c-4.51 2.897 2.46 19.474 42.47 21.889 40 2.414 62.36-3.703 53.14-20.762h-.01zM1411.12 106.673s-16.83-14-55.8-16.414c-38.98-2.415-48.08 14-48.08 14s33.51-10.46 103.88 2.414zM1356.87 169.425s-18.44-17.059 17.67-20.762c36.1-3.703 55.59 8.045 61.13 13.518 5.54 5.474-3.08 12.874-15.59 15.933 0 0 10.26-4.667-7.59-12.392-17.84-7.726-36.1-5.149-43.9-4.023-7.8 1.126-11.86 3.076-11.72 7.726zM888.946 50.656s-20.695-7.737 13.682-14.633c35.077-7.037 53.98-5.07 61.714-3.81 6.656 1.082 3.928 7.02-7.727 10.992 0 0 4.435-3.832-14.218-4.795-18.653-.958-35.97 3.804-43.361 5.854-7.391 2.05-11.012 3.865-10.09 6.387v.005zM1378.87 30.343c.11-1.95-5.1-3.714-11.64-3.938-6.54-.223-11.92 1.176-12.03 3.127-.11 1.95 5.1 3.713 11.64 3.937 6.53.224 11.92-1.176 12.03-3.126zM1095.45 32.42c16.95-.166 30.66-2.3 30.62-4.767-.04-2.465-13.81-4.329-30.76-4.162-16.95.168-30.66 2.302-30.62 4.768.04 2.465 13.81 4.329 30.76 4.162zM653.067 147.707c19.834-4.488 35.207-10.048 34.336-12.417-.871-2.369-17.656-.652-37.49 3.837-19.834 4.488-35.207 10.047-34.336 12.416.872 2.37 17.656.652 37.49-3.836z"></path>
            <path
              fill="#6A539A"
              d="M925.109 51.58c15.049-2.209 26.832-5.473 26.318-7.29-.513-1.817-13.129-1.499-28.178.71-15.049 2.21-26.833 5.474-26.319 7.29.514 1.818 13.13 1.5 28.179-.71zM1195.29 168.707c10.94-1.606 19.51-3.978 19.13-5.299-.37-1.32-10.79-5.09-21.73-3.484-10.94 1.606-18.25 7.979-17.88 9.299.38 1.321 9.55 1.09 20.48-.516zM951.563 116.159c14.843-2.42 26.358-6.339 25.718-8.753-.639-2.415-13.191-2.41-28.034.01-14.844 2.42-26.358 6.339-25.718 8.753.639 2.415 13.191 2.41 28.034-.01zM1391.72 59.519c.64-3.701-8.94-7.777-21.41-9.104-12.46-1.327-23.08.597-23.72 4.297-.64 3.701 8.94 7.777 21.41 9.104 12.46 1.327 23.08-.597 23.72-4.297zM1315.29 201.507c.64-3.701-8.94-7.777-21.41-9.104-12.46-1.327-23.08.597-23.72 4.298-.64 3.7 8.94 7.776 21.41 9.103 12.46 1.327 23.08-.597 23.72-4.297zM1326.56 35.825c.39-2.985-7.45-6.06-17.52-6.868-10.06-.807-18.53.959-18.92 3.944-.39 2.986 7.45 6.06 17.51 6.868 10.07.808 18.54-.958 18.93-3.944zM1239.15 202.33c.39-2.985-7.45-6.06-17.52-6.868-10.06-.807-18.54.958-18.93 3.944-.38 2.986 7.46 6.061 17.52 6.868 10.07.808 18.54-.958 18.93-3.944zM1425.79 46.13c.48-2.247-5.26-4.873-12.82-5.867-7.56-.994-14.08.021-14.56 2.267-.48 2.246 5.26 4.873 12.82 5.866 7.57.994 14.08-.021 14.56-2.267zM459.312 180.196c11.978-5.947 20.429-12.328 18.876-14.252-1.552-1.924-12.52 1.337-24.497 7.284-11.978 5.947-20.429 12.328-18.876 14.252 1.552 1.924 12.52-1.337 24.497-7.284zM622.559 132.934c8.131-2.489 13.878-6.204 12.837-8.296-1.041-2.093-8.476-1.771-16.607.718-8.13 2.49-13.878 6.204-12.837 8.297 1.041 2.093 8.477 1.771 16.607-.719zM331.196 247.302c7.721-5.219 11.492-11.714 8.423-14.508-3.069-2.794-11.815-.829-19.536 4.39-7.72 5.219-11.491 11.715-8.423 14.509 3.069 2.794 11.816.828 19.536-4.391zM246.092 309.568c7.721-5.219 11.492-11.715 8.423-14.509-3.069-2.794-11.815-.828-19.536 4.391-7.72 5.218-11.491 11.714-8.423 14.508 3.069 2.794 11.816.828 19.536-4.39zM124.092 445.568c7.721-5.219 11.492-11.715 8.423-14.509-3.069-2.794-11.815-.828-19.536 4.391-7.72 5.218-11.491 11.714-8.423 14.508 3.069 2.794 11.816.828 19.536-4.39zM515.544 159.71c8.547-3.715 13.445-9.409 10.94-12.718-2.504-3.309-11.463-2.981-20.009.734-8.547 3.715-13.445 9.409-10.94 12.718 2.504 3.309 11.463 2.981 20.009-.734z"></path>
            <path
              fill="#473D68"
              d="M867.211 262.329c-1.83-2.391-9.559.961-17.262 7.487-7.704 6.525-12.466 13.754-10.636 16.145s9.559-.961 17.262-7.487c7.704-6.525 12.466-13.754 10.636-16.145z"></path>
          </g>
          <defs>
            <clipPath id="clip0_254_3093">
              <path fill="#fff" d="M0 0H1440V466H0z"></path>
            </clipPath>
          </defs>
        </svg>
      )}
    </BrowserOnly>
  );
}

export default MoonIconDark;
