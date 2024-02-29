const navBarHTML = `
    <nav class="navbar">
        <ul class="navbar-nav">
            <li class="logo">
                <a href="#" class="nav-link">
                    <span class="link-text logo-text">Electron</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                        class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                        <g class="fa-group">
                            <path fill="currentColor"
                                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                class="fa-secondary"></path>
                            <path fill="currentColor"
                                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                class="fa-primary"></path>
                        </g>
                    </svg>
                </a>
            </li>
            <li class="nav-item">
                <a href="/html/contact.html" class="nav-link">
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" class="fa-primary"
                            d="M896 192H128c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h576.6l191.6 127.7L896 832c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64z"
                        />
                        <path fill="currentColor" class="fa-secondary"
                            d="M640 512c0-125.4-51.5-238.7-134.5-320H128c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h377.5c83-81.3 134.5-194.6 134.5-320z"
                        />
                        <path d="M256 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="currentColor" class="fa-tertiary" />
                        <path d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="currentColor" class="fa-secondary" />
                        <path d="M768 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="currentColor" class="fa-tertiary" />
                    </svg>
                    <span class="link-text">Contact Us</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/html/whoarewe.html" class="nav-link">
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" class="fa-primary"
                            d="M142.9 736c-11.5 0-22.7-6.3-28.4-17.2C81.5 655.4 64 583.9 64 512c0-60.5 11.8-119.1 35.2-174.4 22.6-53.4 54.9-101.3 96-142.4s89-73.4 142.4-96C392.9 75.8 451.5 64 512 64c47.3 0 93.9 7.3 138.4 21.8 16.8 5.5 26 23.5 20.6 40.3-5.5 16.8-23.5 26-40.3 20.6C592.5 134.3 552.6 128 512 128c-211.7 0-384 172.3-384 384 0 62.5 14.5 122.2 43.2 177.2 8.2 15.7 2.1 35-13.6 43.2-4.7 2.4-9.7 3.6-14.7 3.6zM704.2 913.1c-11.5 0-22.7-6.3-28.4-17.2-8.2-15.7-2.1-35 13.6-43.2C816.8 786.2 896 655.7 896 512c0-19.8-1.5-39.7-4.5-59.1-2.7-17.5 9.3-33.8 26.7-36.5 17.5-2.7 33.8 9.3 36.5 26.7 3.5 22.6 5.3 45.8 5.3 68.9 0 83.5-23.1 164.9-66.8 235.5-42.5 68.6-102.7 124.6-174.2 161.9-4.8 2.5-9.9 3.7-14.8 3.7z" />
                        <path fill="currentColor" class="fa-secondary"
                            d="M259.9 530.5a117.2 146.5 0 1 0 234.4 0 117.2 146.5 0 1 0-234.4 0Z" />
                        <path fill="currentColor" class="fa-primary"
                            d="M506.1 960c140.7 0 160.9-65.1 43.7-143-49.5-32.9-108.9-52-172.7-52s-123.3 19.2-172.7 52c-117.2 77.9-97 143 43.7 143h258z" />
                        <path fill="currentColor" class="fa-tertiary"
                            d="M733.2 193.1a52.1 65.1 0 1 0 104.2 0 52.1 65.1 0 1 0-104.2 0Z" />
                        <path fill="currentColor" class="fa-primary"
                            d="M842.7 384c62.5 0 71.5-28.9 19.4-63.5-22-14.6-48.4-23.1-76.8-23.1s-54.8 8.5-76.8 23.1c-52.1 34.6-43.1 63.5 19.4 63.5h114.8z" />
                    </svg>
                    <span class="link-text">Who are we?</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/html/portfolio.html" class="nav-link">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" class="fa-secondary" opacity="0.1" d="M14.4 8.8L14.1577 8.66152C13.6418 8.36676 13 8.73922 13 9.33333L13 14.6667C13 15.2608 13.6418 15.6332 14.1577 15.3385L14.4 15.2L18.6 12.8C19.219 12.4463 19.219 11.5537 18.6 11.2L14.4 8.8Z" />
                        <path fill="currentColor" class="fa-tertiary" opacity="0.1" d="M6.6 8L6.41333 7.88333C5.79807 7.4988 5 7.94112 5 8.66667L5 15.3333C5 16.0589 5.79807 16.5012 6.41333 16.1167L6.6 16L11.4 13C12.139 12.5381 12.139 11.4619 11.4 11L6.6 8Z"/>
                        <path fill="currentColor" class="fa-tertiary" d="M14.4 8.8L14.1577 8.66152C13.6418 8.36676 13 8.73922 13 9.33333L13 14.6667C13 15.2608 13.6418 15.6332 14.1577 15.3385L14.4 15.2L18.6 12.8C19.219 12.4463 19.219 11.5537 18.6 11.2L14.4 8.8Z" />
                        <path fill="currentColor" class="fa-primary" d="M6.6 8L6.41333 7.88333C5.79807 7.4988 5 7.94112 5 8.66667L5 15.3333C5 16.0589 5.79807 16.5012 6.41333 16.1167L6.6 16L11.4 13C12.139 12.5381 12.139 11.4619 11.4 11L6.6 8Z" />
                    </svg>
                    <span class="link-text">Portfolio of our founder</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/html/projects.html" class="nav-link">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="800px" height="800px" viewBox="0 0 32 32" xml:space="preserve">
                        <g class="fa-group">
                            <line fill="currentColor" class="fa-tertiary" x1="10" y1="20.356" x2="16" y2="16.923"></line>
                            <polygon class="fa-secondary" fill="currentColor"
                                points="4,16.915 10,13.466 16,16.923 10,20.356 "></polygon>
                            <polygon fill="currentColor" class="fa-primary"
                                points="10,28 16,24.536 16,16.923 10,20.356 "></polygon>
                            <line fill="currentColor" class="fa-tertiary" x1="10" y1="20.356" x2="16" y2="16.923"></line>
                            <polygon class="fa-tertiary" fill="currentColor"
                                points="4,16.915 10,13.466 16,16.923 10,20.356 "></polygon>
                            <polygon fill="currentColor" class="fa-tertiary" points=" 10,28 16,24.536 16,16.923 10,20.356 "></polygon>
                            <polygon class="fa-secondary" fill="currentColor"
                                points="10,28 4,24.536 4,16.915 10,20.356 "></polygon>
                            <line fill="currentColor" class="fa-primary" x1="22" y1="20.379" x2="27.962" y2="16.915">
                            </line>
                            <polygon class="fa-tertiary" fill="currentColor"
                                points="16,16.923 21.962,13.456 27.962,16.915 22,20.379 ">
                            </polygon>
                            <polygon fill="currentColor" class="fa-primary"
                                points="22,28 16,24.536 16,16.923 22,20.379 "></polygon>
                            <polygon class="fa-secondary" fill="currentColor"
                                points="22,28 27.962,24.536 27.962,16.915 22,20.379 "></polygon>
                            <line fill="currentColor" class="fa-primary" x1="16" y1="9.323" x2="21.962" y2="5.865">
                            </line>
                            <polygon class="fa-secondary" fill="currentColor"
                                points="10,5.865 16.037,2.406 21.962,5.865 16,9.323 "></polygon>
                            <polygon fill="currentColor" class="fa-tertiary"
                                points="16,16.923 21.962,13.456 21.962,5.865 16,9.323 ">
                            </polygon>
                            <polygon class="fa-tertiary" fill="currentColor"
                                points="16,16.923 10,13.466 10,5.865 16,9.323 "></polygon>
                        </g>
                    </svg>
                    <span class="link-text">Our Projects</span>
                </a>
            </li>
        </ul>
    </nav>
`

document.write(navBarHTML)
