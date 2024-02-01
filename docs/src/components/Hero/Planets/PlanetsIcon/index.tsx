import React from 'react';
import useScreenSize from '@site/src/hooks/useScreenSize';
import BrowserOnly from '@docusaurus/BrowserOnly';

function PlanetsIcon() {
  const { windowWidth } = useScreenSize();

  return (
    <BrowserOnly>
      {() => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={
            617 *
            (windowWidth < 420
              ? 0.25
              : windowWidth < 700
              ? 0.4
              : windowWidth < 1024
              ? 0.6
              : windowWidth < 1350
              ? 0.8
              : 1)
          }
          height={
            600 *
            (windowWidth < 420
              ? 0.25
              : windowWidth < 700
              ? 0.4
              : windowWidth < 1024
              ? 0.6
              : windowWidth < 1350
              ? 0.8
              : 1)
          }
          fill="none"
          viewBox="0 0 617 600">
          <path
            fill="#87CCE8"
            d="M386.5 196c47.696 0 86.5 38.804 86.5 86.5S434.196 369 386.5 369 300 330.196 300 282.5s38.804-86.5 86.5-86.5zm0 1.768c-46.721 0-84.737 38.011-84.737 84.737 0 46.721 38.011 84.737 84.737 84.737 46.721 0 84.737-38.01 84.737-84.737 0-46.726-38.011-84.737-84.737-84.737z"></path>
          <path
            fill="#87CCE8"
            d="M237.661 198.753c28.978-28.938 67.505-44.876 108.491-44.876 40.981 0 79.508 15.938 108.49 44.876 28.978 28.938 44.938 67.416 44.938 108.341 0 40.924-15.96 79.398-44.938 108.34-28.977 28.938-67.509 44.876-108.49 44.876-40.982 0-79.509-15.938-108.491-44.876-28.978-28.938-44.938-67.416-44.938-108.34 0-40.925 15.96-79.403 44.938-108.341zm108.487-43.459c-83.816 0-152.006 68.095-152.006 151.795 0 83.7 68.19 151.796 152.006 151.796 83.815 0 152.005-68.096 152.005-151.796 0-83.7-68.19-151.795-152.005-151.795z"></path>
          <path
            fill="#87CCE8"
            d="M170.795 200.195c10.421-24.611 25.346-46.71 44.349-65.69 19.007-18.981 41.14-33.881 65.781-44.288 25.514-10.779 52.618-16.243 80.557-16.243 27.938 0 55.038 5.464 80.556 16.242 24.645 10.408 46.774 25.312 65.781 44.289 19.007 18.98 33.928 41.083 44.35 65.69 10.793 25.479 16.265 52.545 16.265 80.445 0 27.9-5.472 54.966-16.265 80.445-10.422 24.611-25.347 46.709-44.35 65.69-19.007 18.981-41.14 33.881-65.781 44.288-25.514 10.779-52.618 16.243-80.556 16.243-27.939 0-55.039-5.464-80.557-16.243-24.645-10.407-46.774-25.311-65.781-44.288-19.007-18.981-33.928-41.079-44.349-65.69-10.794-25.479-16.265-52.545-16.265-80.445 0-27.9 5.471-54.966 16.265-80.445zM361.482 75.391c-113.332 0-205.533 92.073-205.533 205.249 0 113.175 92.201 205.249 205.533 205.249s205.533-92.074 205.533-205.249c0-113.176-92.201-205.249-205.533-205.249z"></path>
          <circle
            cx="245.655"
            cy="195.655"
            r="34.655"
            fill="#FCFCFF"
            opacity="0.5"
            transform="rotate(90 245.655 195.655)"></circle>
          <path
            fill="#782AEB"
            d="M245.655 221.823c-14.452 0-26.168-11.716-26.168-26.168s11.716-26.168 26.168-26.168 26.168 11.716 26.168 26.168-11.716 26.168-26.168 26.168z"></path>
          <mask
            id="mask0_254_967"
            style={{ maskType: 'alpha' }}
            width="53"
            height="53"
            x="219"
            y="169"
            maskUnits="userSpaceOnUse">
            <path
              fill="#782AEB"
              d="M245.654 221.824c-14.452 0-26.168-11.716-26.168-26.168s11.716-26.168 26.168-26.168 26.168 11.716 26.168 26.168-11.716 26.168-26.168 26.168z"></path>
          </mask>
          <g mask="url(#mask0_254_967)">
            <path
              fill="#B58DF1"
              fillRule="evenodd"
              d="M248.569 234.565c-6.061-3.72-15.101-9.27-11.397-10.359 2.426-.714 6.628 1.386 9.827 2.985 3.484 1.741 5.778 2.888 3.292-.841-4.768-7.152-6.539-13.925-5.107-21.404.801-4.186 3.984-2.311 7.654-.149 2.886 1.701 6.074 3.578 8.642 2.825 3.02-.887 2.924-2.575 2.826-4.291-.116-2.05-.235-4.141 4.957-4.952 5.3-.828 6.349 1.846 7.595 5.021.548 1.396 1.133 2.888 2.134 4.222l-25.727 29.994c-.641-.561-2.467-1.682-4.696-3.051zm6.381-63.328c3.704-1.089-5.335-6.639-11.396-10.36-2.229-1.368-4.056-2.49-4.697-3.05l-19.371 23.543c.169.224.351.459.546.703l-17.329 21.061c3.278 4.371 11.742 12.815 19.371 11.623 5.259-.822 4.336-2.416 3.21-4.359-.893-1.542-1.914-3.304-.075-5.075.956.304 2.799.679 6.111 1.083 8.136.992 4.904-2.11.429-6.405-2.246-2.155-4.804-4.61-6.397-6.999-2.797-4.195-.413-3.533 3.059-2.569.517.143 1.059.294 1.611.436 2.84 1.614 5.899 2.582 8.835 2.123 5.319-.831 2.573-3.701-.69-7.112-2.587-2.704-5.499-5.749-4.972-8.385.56-2.802 4.019.126 8.796 4.171 5.384 4.559 12.445 10.536 18.919 11.326 7.534.919.452-4.847-7.204-11.081-4.76-3.875-9.742-7.932-11.571-10.674-2.688-4.033.119-3.044 3.986-1.681 2.992 1.053 6.619 2.331 8.829 1.681z"
              clipRule="evenodd"></path>
          </g>
          <path
            fill="#D1BBF3"
            fillRule="evenodd"
            d="M269.186 231.017c-.363-2.382-2.164-6.639-6.774-13.642a2.5 2.5 0 014.176-2.75c4.653 7.069 7.003 12.104 7.541 15.64.274 1.804.131 3.565-.803 5.001-.972 1.493-2.478 2.148-3.882 2.365-2.6.4-5.718-.548-8.106-1.551-2.451-1.03-4.83-2.419-6.049-3.524a127.355 127.355 0 00-2.84-2.466c-3.698-3.153-8.827-7.526-14.399-14.06-7.238-8.488-15.291-20.665-22.593-38.99-2.147-5.388-3.4-9.406-3.806-12.156-.195-1.32-.254-2.7.143-3.862.215-.629.608-1.32 1.303-1.836a3.543 3.543 0 012.237-.684c1.275.035 2.462.68 3.368 1.29.994.668 2.07 1.588 3.196 2.679 2.258 2.19 4.931 5.282 7.835 9.017a2.5 2.5 0 01-3.948 3.069c-2.834-3.646-5.345-6.535-7.368-8.496a24.636 24.636 0 00-1.767-1.575c.373 2.173 1.437 5.646 3.452 10.703 7.107 17.837 14.882 29.539 21.753 37.597 5.281 6.194 9.991 10.212 13.677 13.357 1.141.974 2.184 1.864 3.116 2.709.625.566 2.424 1.693 4.626 2.618 2.264.951 4.272 1.394 5.409 1.219.238-.037.361-.091.412-.119.033-.019.037-.027.039-.03l.001-.002c.008-.012.226-.366.051-1.521z"
            clipRule="evenodd"></path>
          <circle
            cx="389.928"
            cy="283.394"
            r="66.173"
            fill="#FCFCFF"
            opacity="0.5"
            transform="rotate(60 389.928 283.394)"></circle>
          <path
            fill="#782AEB"
            d="M414.913 326.665c-23.899 13.798-54.459 5.61-68.257-18.289-13.798-23.899-5.61-54.459 18.289-68.257 23.899-13.798 54.459-5.609 68.257 18.289 13.798 23.899 5.61 54.459-18.289 68.257z"></path>
          <mask
            id="mask1_254_967"
            style={{ maskType: 'alpha' }}
            width="101"
            height="101"
            x="339"
            y="233"
            maskUnits="userSpaceOnUse">
            <path
              fill="#782AEB"
              d="M414.91 326.671c-23.899 13.798-54.458 5.609-68.256-18.29-13.798-23.899-5.61-54.458 18.289-68.256 23.899-13.798 54.458-5.61 68.256 18.289 13.799 23.899 5.61 54.458-18.289 68.257z"></path>
          </mask>
          <g mask="url(#mask1_254_967)">
            <path
              fill="#B58DF1"
              fillRule="evenodd"
              d="M431.894 344.959c-13.575-.367-33.821-.914-28.736-6.252 3.329-3.495 12.283-4.034 19.1-4.444 7.423-.447 12.311-.742 4.641-4.534-14.713-7.275-24.109-16.784-28.881-30.518-2.671-7.688 4.382-7.626 12.515-7.555 6.397.056 13.461.118 16.987-3.58 4.148-4.349 2.378-7.049.578-9.793-2.15-3.28-4.342-6.623 3.469-12.921 7.974-6.43 12.262-3.01 17.354 1.051 2.237 1.785 4.63 3.693 7.558 4.944l-13.906 74.163c-1.596-.316-5.686-.427-10.679-.561zm-49.909-110.814c5.085-5.338-15.161-5.885-28.736-6.251-4.993-.135-9.083-.246-10.679-.561l-9.555 57.425c.493.211 1.019.426 1.574.644l-8.547 51.368c9.594 4.098 31.651 9.981 43.129.726 7.912-6.38 4.864-8.134 1.147-10.273-2.949-1.697-6.319-3.636-4.97-8.321 1.873-.41 5.277-1.549 11.139-4.043 14.403-6.127 6.097-8.171-5.405-11.001-5.77-1.419-12.345-3.037-17.26-5.467-8.63-4.267-4.056-5.448 2.605-7.169.99-.255 2.025-.523 3.07-.814 6.241-.041 12.228-1.361 16.647-4.924 8.001-6.452.72-8.577-7.931-11.102-6.861-2.002-14.583-4.256-16.228-9.118-1.748-5.169 6.766-3.629 18.527-1.501 13.257 2.398 30.639 5.542 42.1.666 13.335-5.673-3.881-8.447-22.493-11.445-11.572-1.864-23.683-3.816-29.325-6.605-8.296-4.102-2.71-5.146 4.986-6.586 5.954-1.114 13.172-2.464 16.205-5.648z"
              clipRule="evenodd"></path>
          </g>
          <path
            fill="#87CCE8"
            d="M67.047 0H65.23a448.863 448.863 0 00-2.049 4.764c-22.35 52.82-33.68 108.933-33.68 166.772 0 57.844 11.33 113.961 33.68 166.78 21.585 51.022 52.482 96.841 91.835 136.195 39.362 39.35 85.195 70.236 136.222 91.816C344.073 588.673 400.197 600 458.052 600c54.992 0 108.422-10.231 158.948-30.443v-1.78c-49.152 19.777-102.802 30.675-158.948 30.675-235.449 0-427.002-191.51-427.002-426.916C31.05 110.556 43.9 52.52 67.047 0z"></path>
        </svg>
      )}
    </BrowserOnly>
  );
}

export default PlanetsIcon;
