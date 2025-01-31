import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    
//   const [tab, setTab] = React.useState(localStorage.getItem('tab')+'')
//   const navigate = useNavigate();

//   React.useEffect(() => {  
//     localStorage.setItem('tab', tab)
//   }, [tab])

//   const ClickHandler =(item: any)=>{  
//     setTab(item)  
//     navigate('/faq')
//   }  

//   React.useEffect(() => {
//     if(localStorage.getItem('tab')){ 
//       setTab('')
//     }  
//   }, []) 

    return (
      <div className="w-full px-6 py-20 flex flex-col justify-center items-center">
        <div className="flex ">
          <div className="lg:mx-6 mx-3">
            <p
              style={{ color: "#152028" }}
              className="font-CircularStd-Bold text-lg my-2"
            >
              Everest
            </p>
            <p
              style={{ color: "#727272" }}
              className="font-CircularStd-Regular my-2 cursor-pointer"
            >
              Privacy Policy
            </p>
            <p
              style={{ color: "#727272" }}
              className="font-CircularStd-Regular my-2 cursor-pointer"
            >
              Terms of service
            </p>
            <p
              style={{ color: "#727272" }}
              className="font-CircularStd-Regular my-2 cursor-pointer"
            >
              FAQ
            </p>
          </div>
          <div className="lg:mx-6 mx-3">
            <p
              style={{ color: "#152028" }}
              className="font-CircularStd-Bold text-lg my-2"
            >
              Resource
            </p>
            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#727272" }}
              className="font-CircularStd-Regular my-2 cursor-pointer"
            >
              White paper
            </a>
            <p
              style={{ color: "#727272" }}
              className="font-CircularStd-Regular my-2 cursor-pointer"
            >
              Token page
            </p>
            <p
              style={{ color: "#727272" }}
              className="font-CircularStd-Regular my-2 cursor-pointer"
            >
              Contact Us
            </p>
          </div>
        </div>

        <div className="flex mt-6">
          <a
            href="https://www.facebook.com/everestxhq/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgba(11, 133, 253, 0.08)" }}
            className="w-12 h-12 cursor-pointer flex mx-2 lg:mx-5 justify-center items-center rounded-full"
          >
            <svg
              width="10"
              height="20"
              viewBox="0 0 10 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.63576 0.837313L7.32134 0.833496C4.72126 0.833496 3.04092 2.6044 3.04092 5.34535V7.42562H0.713907C0.512824 7.42562 0.349991 7.59308 0.349991 7.79964V10.8137C0.349991 11.0202 0.513016 11.1876 0.713907 11.1876H3.04092V18.793C3.04092 18.9996 3.20375 19.1668 3.40484 19.1668H6.44093C6.64201 19.1668 6.80484 18.9993 6.80484 18.793V11.1876H9.52568C9.72676 11.1876 9.88959 11.0202 9.88959 10.8137L9.89068 7.79964C9.89068 7.70046 9.85226 7.60548 9.78409 7.53529C9.71601 7.4651 9.62318 7.42562 9.52659 7.42562H6.80484V5.66215C6.80484 4.81455 7.00143 4.38428 8.07634 4.38428L9.63543 4.3837C9.83626 4.3837 9.99909 4.21625 9.99909 4.00988V1.21114C9.99909 1.00496 9.83651 0.837696 9.63576 0.837313Z"
                fill="#0B85FD"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/everestxhq?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgba(11, 133, 253, 0.08)" }}
            className="w-12 h-12 cursor-pointer flex mx-2 lg:mx-5 justify-center items-center rounded-full"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.66666 9.99984C1.66666 6.50703 1.66666 4.76062 2.542 3.55582C2.82469 3.16672 3.16687 2.82454 3.55597 2.54185C4.76077 1.6665 6.50718 1.6665 9.99999 1.6665C13.4928 1.6665 15.2392 1.6665 16.444 2.54185C16.8331 2.82454 17.1753 3.16672 17.458 3.55582C18.3333 4.76062 18.3333 6.50703 18.3333 9.99984C18.3333 13.4927 18.3333 15.2391 17.458 16.4438C17.1753 16.8329 16.8331 17.1752 16.444 17.4578C15.2392 18.3332 13.4928 18.3332 9.99999 18.3332C6.50718 18.3332 4.76077 18.3332 3.55597 17.4578C3.16687 17.1752 2.82469 16.8329 2.542 16.4438C1.66666 15.2391 1.66666 13.4927 1.66666 9.99984ZM9.99999 5.58807C7.56359 5.58807 5.58822 7.56344 5.58822 9.99984C5.58822 12.4363 7.56359 14.4116 9.99999 14.4116C12.4364 14.4116 14.4117 12.4363 14.4117 9.99984C14.4117 7.56344 12.4364 5.58807 9.99999 5.58807ZM9.99999 12.7572C8.48016 12.7572 7.24264 11.5197 7.24264 9.99984C7.24264 8.47892 8.48016 7.24249 9.99999 7.24249C11.5198 7.24249 12.7573 8.47892 12.7573 9.99984C12.7573 11.5197 11.5198 12.7572 9.99999 12.7572ZM15.3305 5.2572C15.3305 5.58187 15.0673 5.84506 14.7427 5.84506C14.418 5.84506 14.1547 5.58187 14.1547 5.2572C14.1547 4.93253 14.418 4.66933 14.7427 4.66933C15.0673 4.66933 15.3305 4.93253 15.3305 5.2572Z"
                fill="#0B85FD"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/EverestxHQ?t=DNktzhJU_6I82D3DBCfubQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgba(11, 133, 253, 0.08)" }}
            className="w-12 h-12 cursor-pointer flex mx-2 lg:mx-5 justify-center items-center rounded-full"
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 1.8106C17.1059 2.08388 16.4148 2.26921 15.6887 2.35196C16.4301 1.92683 16.9977 1.25251 17.2667 0.451487C16.5712 0.845179 15.8035 1.13105 14.9855 1.28603C14.3305 0.616945 13.3988 0.200195 12.3653 0.200195C10.3828 0.200195 8.77525 1.73941 8.77525 3.63674C8.77525 3.90583 8.80692 4.16865 8.86817 4.41997C5.88501 4.2765 3.23973 2.90796 1.46928 0.828429C1.1598 1.33523 0.983742 1.92576 0.983742 2.55613C0.983742 3.74878 1.61801 4.8011 2.58033 5.41678C1.992 5.39795 1.43866 5.24295 0.954233 4.98536V5.0283C0.954233 6.6932 2.19213 8.08261 3.83353 8.39886C3.5328 8.47636 3.21568 8.51928 2.88762 8.51928C2.6558 8.51928 2.43162 8.49728 2.21181 8.45544C2.66889 9.82186 3.99429 10.8155 5.56463 10.8428C4.33657 11.7643 2.78811 12.3119 1.10624 12.3119C0.816467 12.3119 0.531033 12.2951 0.25 12.2648C1.83893 13.2417 3.7253 13.8113 5.75272 13.8113C12.3567 13.8113 15.9664 8.57378 15.9664 4.0315L15.9544 3.5865C16.6597 3.1048 17.2699 2.49959 17.75 1.8106Z"
                fill="#0B85FD"
              />
            </svg>
          </a>
          <a
            href="https://t.me/everestcommunity"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgba(11, 133, 253, 0.08)" }}
            className="w-12 h-12 cursor-pointer flex mx-2 lg:mx-5 justify-center items-center rounded-full"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8475 11.651L7.51667 16.3043C7.99 16.3043 8.195 16.101 8.44083 15.8568L10.66 13.736L15.2583 17.1035C16.1017 17.5735 16.6958 17.326 16.9233 16.3277L19.9417 2.18434L19.9425 2.18351C20.21 0.936842 19.4917 0.449342 18.67 0.755175L0.928333 7.54767C-0.282501 8.01767 -0.264167 8.69267 0.722499 8.99851L5.25833 10.4093L15.7942 3.81684C16.29 3.48851 16.7408 3.67018 16.37 3.99851L7.8475 11.651Z"
                fill="#0B85FD"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/posts/everestxhq_evhq-flyalongwitheverest-activity-6899678531027107840-1ASM"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "rgba(11, 133, 253, 0.08)" }}
            className="w-12 h-12 cursor-pointer flex mx-2 lg:mx-5 justify-center items-center rounded-full"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3292 18.3332V18.3326H18.3333V12.2201C18.3333 9.22972 17.6896 6.92627 14.1937 6.92627C12.5132 6.92627 11.3854 7.84849 10.925 8.7228H10.8764V7.20544H7.5618V18.3326H11.0132V12.8228C11.0132 11.3721 11.2882 9.9693 13.0847 9.9693C14.8548 9.9693 14.8812 11.6249 14.8812 12.9159V18.3332H18.3292Z"
                fill="#0B85FD"
              />
              <path
                d="M1.94167 7.20605H5.39722V18.3331H1.94167V7.20605Z"
                fill="#0B85FD"
              />
              <path
                d="M3.66806 1.6665C2.56319 1.6665 1.66666 2.56303 1.66666 3.6679C1.66666 4.77275 2.56319 5.68803 3.66806 5.68803C4.77291 5.68803 5.66944 4.77275 5.66944 3.6679C5.66875 2.56303 4.77222 1.6665 3.66806 1.6665Z"
                fill="#0B85FD"
              />
            </svg>
          </a>
        </div>
        <p
          style={{ color: "#222222" }}
          className="font-CircularStd-Regular mt-20"
        >
          © 2022 Everest
        </p>
      </div>
    );
}
