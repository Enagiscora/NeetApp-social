// Local Centralised State Storage

const AppState = {

    currentUser: null,

    tempAvatarBase64: null,

    activeDmUserKey: null,

    activeFeedTab: "foryou",

    shareTargetPostId: null, // Holds reference context of post package ready to be forwarded

    

    allowedNumbers: ["+12025550143", "+12025550199"],

    

    // Core Network Profiles Registry

    profiles: {

        "sector_labx": { 

            name: "Sector LabX", 

            username: "sector_labx", 

            bio: "Industrial visual rendering core pipeline channel.", 

            address: "Remote Node Cluster",

            phone: "+1 (202) 555-0143",

            avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff4a75'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>",

            followers: ["alex_k", "corp_member_10"],

            following: ["alex_k"]

        },

        "alex_k": { 

            name: "Alex Kinetix", 

            username: "alex_k", 

            bio: "UI dark aesthetics developer. Kinetix Strike lead.", 

            address: "Abuja Node",

            phone: "+1 (202) 555-0199",

            avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300f2fe'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>",

            followers: ["sector_labx"],

            following: ["sector_labx"]

        },

        "corp_member_10": {

            name: "Platoon 10 Lead",

            username: "nysc_p10",

            bio: "NYSC Platoon 10 Hub. Skill Acquisition & Entrepreneurship Development tracker.",

            address: "Camp Base",

            phone: "+2348030000000",

            avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234caf50'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>",

            followers: [],

            following: ["sector_labx"]

        }

    },

    

    // Direct Messages Memory Arrays (Active Chat Registers)

    directMessages: {

        "sector_labx": [

            { sender: "sector_labx", text: "Hey, did you review the updated 22-prompt execution sequencing script yet?" }

        ],

        "alex_k": [

            { sender: "alex_k", text: "The glassmorphism dark system interface container parameters look solid." }

        ]

    },

    posts: [

        { id: 201, author: "sector_labx", text: "The high-volume industrial visual layout is completely verified. Sequence parameters track perfectly at 2m 55s target frames! 🍉🎬", img: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?w=500&auto=format&fit=crop&q=60" },

        { id: 202, author: "alex_k", text: "Glassmorphic panels setup is optimized for vertical viewport devices. No overlapping container boundaries found." },

        { id: 203, author: "sector_labx", text: "Testing rendering textures under atmospheric mountain light values. This dynamic layer maps directly to our cinematic targets.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60" },

        { id: 204, author: "alex_k", text: "Just committed the updated neon-glow borders parameters. The interactive system feels incredibly fluid now." },

        { id: 205, author: "sector_labx", text: "Watermelon ice bar simulation fluid dynamics framework compiled successfully. Look at those micro-crystal reflections! 🧊✨", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60" }

    ],

    aiHistoryPosts: [

        { id: 901, author: "sector_labx", text: "🤖 [AI Core Render Log]: Task initialization vector active. Running multi-stage vertical rendering calculations across network nodes." },

        { id: 902, author: "alex_k", text: "🤖 [AI Core CSS Log]: Glass dark panel alpha calculation modified to hex values equivalent to rgba(10,12,18,0.95)." },

        { id: 903, author: "sector_labx", text: "🤖 [AI History Matrix]: Prompt validation sequence pass. 22 unique chronological keyframes linked cleanly to simulation tracks." }

    ]

};

// Helper Utility to randomize numerical allocations

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// PROGRAMMATIC NODE GENERATOR PIPELINE (Injects 100+ unique profiles)

(function generateExtendedNetworkAssets() {

    const firstNames = ["Tunde", "Chidi", "Musa", "Efe", "Yusuf", "Amara", "Zainab", "Segun", "Femi", "Chioma", "Ibrahim", "Blessing", "Joy", "David", "Omer"];

    const lastNames = ["Balogun", "Okafor", "Alabi", "Nwachukwu", "Musa", "Adeola", "Bello", "Eze", "Sani", "Umar", "Danladi", "Okoye", "Gbadamosi", "Jimoh"];

    const topics = [

        "Exploring beautiful snow capped mountain elevations for my next backdrop render pass. Nature geometry is unreal.",

        "Just checked into the training camp base. Platoon coordination structure is tracking fully on track.",

        "Testing responsive breakpoint container constraints inside a glass dark panel workspace canvas.",

        "Beautiful morning fog rolling over the valley hills today. Perfect reference color maps for our layout updates.",

        "Reviewing the production script lines. Streamlining the sequence layers to maximize speed variables."

    ];

    const imagePool = [

        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60",

        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&auto=format&fit=crop&q=60"

    ];

    let count = 0;

    for (let i = 0; i < firstNames.length; i++) {

        for (let j = 0; j < lastNames.length; j++) {

            count++;

            const username = `${firstNames[i].toLowerCase()}_${lastNames[j].toLowerCase()}_${count}`;

            const name = `${firstNames[i]} ${lastNames[j]}`;

            

            AppState.profiles[username] = {

                name: name,

                username: username,

                bio: `Digital network participant node #${count} inside NeetApp stack ecosystem.`,

                address: count % 2 === 0 ? "Abuja Hub Node" : "Lagos Core Unit",

                phone: `+234803${1000000 + count}`,

                avatar: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23607d8b'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>`,

                followers: [],

                following: ["sector_labx"]

            };

            if (count % i === 0 || count % 7 === 0) {

                AppState.posts.push({

                    id: 4000 + count,

                    author: username,

                    text: topics[count % topics.length],

                    img: count % 10 === 0 ? imagePool[count % imagePool.length] : null

                });

            }

        }

    }

    // Initialize metrics with fully randomized parameters + generate specialized viewer array keys

    const allProfileKeysArray = Object.keys(AppState.profiles);

    

    function loadRandomMetrics(postObject) {

        postObject.likesCount = getRandomInt(12, 195);

        postObject.userHasLiked = false;

        postObject.sharesCount = getRandomInt(4, 65);

        postObject.viewsCount = getRandomInt(210, 1800);

        

        // Pick a matching subset of profile strings to represent the list of viewers

        let shuffled = [...allProfileKeysArray].sort(() => 0.5 - Math.random());

        postObject.viewerUsernames = shuffled.slice(0, Math.min(postObject.sharesCount * 3, 40));

    }

    AppState.posts.forEach(loadRandomMetrics);

    AppState.aiHistoryPosts.forEach(loadRandomMetrics);

})();

// Navigation Tabs Manager Switch Matrix

function switchFeedTab(tabKey) {

    AppState.activeFeedTab = tabKey;

    document.getElementById('tab-for-you').classList.remove('active-tab');

    document.getElementById('tab-following').classList.remove('active-tab');

    document.getElementById('tab-ai-history').classList.remove('active-tab');

    if (tabKey === 'foryou') document.getElementById('tab-for-you').classList.add('active-tab');

    else if (tabKey === 'following') document.getElementById('tab-following').classList.add('active-tab');

    else if (tabKey === 'aihistory') document.getElementById('tab-ai-history').classList.add('active-tab');

    buildTimelineFeed();

}

// Global UI View Router Mapping Configuration Layer

function navigationRouter(target) {

    if (!AppState.currentUser) return;

    const views = ['feed-container', 'profile-container', 'edit-profile-container', 'search-container', 'ai-container', 'notifications-container', 'messages-container'];

    views.forEach(id => { if(document.getElementById(id)) document.getElementById(id).style.display = 'none'; });

    document.querySelectorAll('.dock-item').forEach(el => el.classList.remove('active-dock'));

    if (target === 'feed') {

        document.getElementById('feed-container').style.display = 'block';

        document.getElementById('dock-home-trigger').classList.add('active-dock');

        buildTimelineFeed();

    } else if (target === 'search') {

        document.getElementById('search-container').style.display = 'block';

        document.getElementById('dock-search-trigger').classList.add('active-dock');

    } else if (target === 'ai') {

        document.getElementById('ai-container').style.display = 'block';

        document.getElementById('dock-ai-trigger').classList.add('active-dock');

    } else if (target === 'notifications') {

        document.getElementById('notifications-container').style.display = 'block';

        document.getElementById('dock-notifications-trigger').classList.add('active-dock');

    } else if (target === 'messages') {

        document.getElementById('messages-container').style.display = 'block';

        document.getElementById('dock-messages-trigger').classList.add('active-dock');

        buildDmThreadsDirectory();

    }

}

function toggleAuthView(view) {

    if (view === 'signup') {

        document.getElementById('login-view').style.display = 'none';

        document.getElementById('signup-view').style.display = 'block';

    } else {

        document.getElementById('signup-view').style.display = 'none';

        document.getElementById('login-view').style.display = 'block';

    }

}

function handleLoginSubmit() {

    const code = document.getElementById('login-country').value;

    const phone = document.getElementById('login-phone').value.trim();

    const pass = document.getElementById('login-password').value;

    const cleanPhone = (code + phone).replace(/[\s()-]/g, "");

    if (!AppState.allowedNumbers.includes(cleanPhone)) {

        alert("Access Exception: Number pattern unallocated inside server registry.");

        return;

    }

    if (pass !== "123456") {

        alert("Invalid access verification credentials code.");

        return;

    }

    initializeUserSession(cleanPhone);

}

function handleSignupSubmit() {

    const allocatedLine = document.getElementById('signup-phone-allocated').value;

    if (document.getElementById('signup-password').value !== "234567") {

        alert("System Signature Mismatch: Registration code unaccepted.");

        return;

    }

    alert("Profile Node Initialized Successfully!");

    initializeUserSession(allocatedLine);

}

function initializeUserSession(phoneString) {

    AppState.currentUser = {

        name: "Enason", username: "enason_dev", bio: "Airtel", address: "Lagos Node", phone: phoneString,

        avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300f2fe'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>",

        followers: ["sector_labx", "alex_k"], following: ["sector_labx", "alex_k"]

    };

    AppState.profiles["enason_dev"] = AppState.currentUser;

    document.getElementById('auth-container').style.display = 'none';

    document.getElementById('x-global-header').style.display = 'block';

    document.getElementById('x-global-footer-dock').style.display = 'flex';

    document.getElementById('header-user-avatar').src = AppState.currentUser.avatar;

    navigationRouter('feed');

}

// Render Core Feed Timeline with Automatic View Impression Adjustments ($+1$)

function buildTimelineFeed() {

    const container = document.getElementById('posts-container');

    container.innerHTML = '';

    let targetsArray = (AppState.activeFeedTab === "aihistory") ? AppState.aiHistoryPosts : AppState.posts;

    targetsArray.forEach(p => {

        const prof = AppState.profiles[p.author];

        if(!prof) return;

        if (AppState.activeFeedTab === "following" && !AppState.currentUser.following.includes(p.author)) return;

        // AUTOMATIC IMPRESSION ENGINE: Every time a timeline stream compiles, simulate reading scroll updates ($+1$)

        p.viewsCount++;

        const card = document.createElement('div');

        card.className = 'post-card';

        card.innerHTML = `

            <div class="post-left" onclick="viewTargetUserProfile('${p.author}')">

                <img src="${prof.avatar}">

            </div>

            <div class="post-right">

                <div class="post-meta-row" onclick="viewTargetUserProfile('${p.author}')">

                    <strong>${prof.name}</strong> <span class="username-label">@${prof.username}</span>

                </div>

                <p class="post-text">${p.text}</p>

                ${p.img ? `<div class="post-media-box"><img src="${p.img}"></div>` : ''}

                

                <div class="post-action-row">

                    <div class="action-item ${p.userHasLiked ? 'liked' : ''}" onclick="togglePostLikeState(${p.id}, this)">

                        <span>❤️</span> <strong class="like-counter-digit">${p.likesCount}</strong>

                    </div>

                    <div class="action-item" onclick="routeDirectlyToUserChat('${p.author}')">

                        <span>💬</span>

                    </div>

                    <div class="action-item" onclick="openShareModalDrawer(${p.id})">

                        <span>🔄</span> <strong>${p.sharesCount}</strong>

                    </div>

                    <div class="action-item" onclick="openViewersModalOverlay(${p.id})">

                        <span>📊</span> <strong>${p.viewsCount}</strong>

                    </div>

                </div>

            </div>

        `;

        container.appendChild(card);

    });

}

// Global Post Like Action Modifier Logic Chain

function togglePostLikeState(postId, elementElement) {

    let p = AppState.posts.find(x => x.id === postId) || AppState.aiHistoryPosts.find(x => x.id === postId);

    if (!p) return;

    const counterTextNode = elementElement.querySelector('.like-counter-digit');

    if (p.userHasLiked) {

        p.likesCount--; p.userHasLiked = false; elementElement.classList.remove('liked');

    } else {

        p.likesCount++; p.userHasLiked = true; elementElement.classList.add('liked');

    }

    counterTextNode.textContent = p.likesCount;

}

function routeDirectlyToUserChat(userHandleTarget) {

    if (userHandleTarget === AppState.currentUser.username) return;

    if (!AppState.directMessages[userHandleTarget]) AppState.directMessages[userHandleTarget] = [];

    navigationRouter('messages');

    openActiveDmWindowSpace(userHandleTarget);

}

// DYNAMIC SHARE MODAL SYSTEM LOGIC MATRIX

function openShareModalDrawer(postId) {

    AppState.shareTargetPostId = postId;

    const overlay = document.getElementById('share-modal-overlay');

    const container = document.getElementById('share-active-threads-list');

    container.innerHTML = '';

    // Collect list of distinct human profiles inside current DM workspace record keys

    const activeChatKeys = Object.keys(AppState.directMessages);

    if(activeChatKeys.length === 0) {

        container.innerHTML = `<p style="padding:15px;font-size:0.8rem;color:#707e8a;text-align:center;">No direct communication channels active yet.</p>`;

    } else {

        activeChatKeys.forEach(key => {

            const profile = AppState.profiles[key];

            if(!profile) return;

            const row = document.createElement('div');

            row.className = 'connection-item-row';

            row.style.cursor = 'pointer';

            row.innerHTML = `

                <div class="connection-clickable-zone">

                    <img src="${profile.avatar}">

                    <div class="c-info">

                        <h5>${profile.name}</h5>

                        <p>@${profile.username}</p>

                    </div>

                </div>

                <button type="button" class="inline-follow-toggle" style="background:#00f2fe;color:#000;">Send</button>

            `;

            row.onclick = () => transmitPostToChatThread(key);

            container.appendChild(row);

        });

    }

    overlay.style.display = 'flex';

}

function transmitPostToChatThread(recipientUserKey) {

    let p = AppState.posts.find(x => x.id === AppState.shareTargetPostId) || AppState.aiHistoryPosts.find(x => x.id === AppState.shareTargetPostId);

    if(!p) return;

    // Increment share meta indicators natively

    p.sharesCount++;

    // Forward the message log into structural history stack array maps

    const sharedTextPacket = `[Shared Post Link from @${p.author}]: "${p.text}"`;

    AppState.directMessages[recipientUserKey].push({ sender: 'self', text: sharedTextPacket });

    closeShareModal();

    alert(`Post forwarded safely to ${AppState.profiles[recipientUserKey].name}!`);

    buildTimelineFeed();

}

function closeShareModal() {

    document.getElementById('share-modal-overlay').style.display = 'none';

    AppState.shareTargetPostId = null;

}

// X-STYLE POST VIEWERS OVERLAY OVERRIDE SYSTEM

function openViewersModalOverlay(postId) {

    let p = AppState.posts.find(x => x.id === postId) || AppState.aiHistoryPosts.find(x => x.id === postId);

    if (!p) return;

    const modal = document.getElementById('connections-modal-overlay');

    const title = document.getElementById('connections-modal-title');

    const body = document.getElementById('connections-modal-list-body');

    title.textContent = "Viewed By";

    body.innerHTML = '';

    // Safeguard lookup array structure

    if(!p.viewerUsernames || p.viewerUsernames.length === 0) {

        p.viewerUsernames = Object.keys(AppState.profiles).slice(0, 15);

    }

    p.viewerUsernames.forEach(username => {

        // Prevent displaying self inside list

        if (username === AppState.currentUser.username) return;

        const profile = AppState.profiles[username];

        if(!profile) return;

        const isFollowing = AppState.currentUser.following.includes(username);

        const row = document.createElement('div');

        row.className = 'connection-item-row';

        row.innerHTML = `

            <div class="connection-clickable-zone" onclick="closeConnectionsModal(); viewTargetUserProfile('${username}');">

                <img src="${profile.avatar}">

                <div class="c-info">

                    <h5>${profile.name}</h5>

                    <p>@${profile.username}</p>

                </div>

            </div>

            <button type="button" class="inline-follow-toggle ${isFollowing ? 'following-mode' : ''}" data-user="${username}">

                ${isFollowing ? 'Following' : 'Follow'}

            </button>

        `;

        // Interactive toggle button listener assignment mapping handles

        const targetBtn = row.querySelector('.inline-follow-toggle');

        targetBtn.onclick = (event) => {

            event.stopPropagation();

            toggleInlineViewersNetworkFollow(username, targetBtn);

        };

        body.appendChild(row);

    });

    modal.style.display = 'flex';

}

function toggleInlineViewersNetworkFollow(targetUsername, buttonNode) {

    const selfKey = AppState.currentUser.username;

    const targetProfile = AppState.profiles[targetUsername];

    if(!targetProfile) return;

    if (buttonNode.classList.contains('following-mode')) {

        // Unfollow Logic Trigger line

        buttonNode.classList.remove('following-mode');

        buttonNode.textContent = 'Follow';

        targetProfile.followers = targetProfile.followers.filter(k => k !== selfKey);

        AppState.currentUser.following = AppState.currentUser.following.filter(k => k !== targetUsername);

    } else {

        // Follow Logic Trigger line

        buttonNode.classList.add('following-mode');

        buttonNode.textContent = 'Following';

        targetProfile.followers.push(selfKey);

        AppState.currentUser.following.push(targetUsername);

        setTimeout(() => { executeFollowBackEvent(targetUsername); }, 500);

    }

}

// Profile Display Configurations

function viewTargetUserProfile(userKey) {

    const target = AppState.profiles[userKey];

    if(!target) return;

    document.getElementById('feed-container').style.display = 'none';

    document.getElementById('search-container').style.display = 'none';

    document.getElementById('profile-container').style.display = 'block';

    document.getElementById('display-name').textContent = target.name;

    document.getElementById('display-username').textContent = "@" + target.username;

    document.getElementById('display-bio').textContent = target.bio;

    document.getElementById('display-address').textContent = `📍 ${target.address}`;

    document.getElementById('display-phone').textContent = `📞 ${target.phone}`;

    document.getElementById('user-avatar-img').src = target.avatar;

    document.getElementById('stat-following-cnt').textContent = target.following.length;

    document.getElementById('stat-followers-cnt').textContent = target.followers.length;

    document.getElementById('profile-container').dataset.activeViewedKey = userKey;

    if(userKey === AppState.currentUser.username) {

        document.getElementById('edit-profile-action-btn').style.display = 'block';

        document.getElementById('follow-profile-action-btn').style.display = 'none';

        document.getElementById('self-settings-wrapper').style.display = 'block';

    } else {

        document.getElementById('edit-profile-action-btn').style.display = 'none';

        document.getElementById('follow-profile-action-btn').style.display = 'block';

        document.getElementById('self-settings-wrapper').style.display = 'none';

        

        const followBtn = document.getElementById('follow-profile-action-btn');

        if(target.followers.includes(AppState.currentUser.username)) {

            followBtn.classList.add('following-state'); followBtn.textContent = 'Following';

        } else {

            followBtn.classList.remove('following-state'); followBtn.textContent = 'Follow';

        }

    }

}

function viewSelfProfile() {

    if(AppState.currentUser) viewTargetUserProfile(AppState.currentUser.username);

}

function showConnectionsModal(type) {

    const currentKey = document.getElementById('profile-container').dataset.activeViewedKey;

    const targetProfile = AppState.profiles[currentKey];

    if(!targetProfile) return;

    const modal = document.getElementById('connections-modal-overlay');

    const title = document.getElementById('connections-modal-title');

    const body = document.getElementById('connections-modal-list-body');

    title.textContent = type === 'followers' ? 'Followers Directory' : 'Following Directory';

    body.innerHTML = '';

    const listKeys = type === 'followers' ? targetProfile.followers : targetProfile.following;

    if(listKeys.length === 0) {

        body.innerHTML = '<p style="font-size:0.8rem;color:#707e8a;padding:10px;">No entities recorded.</p>';

    } else {

        listKeys.forEach(key => {

            const p = AppState.profiles[key]; if(!p) return;

            const row = document.createElement('div');

            row.className = 'connection-item-row';

            row.innerHTML = `

                <div class="connection-clickable-zone">

                    <img src="${p.avatar}">

                    <div class="c-info"><h5>${p.name}</h5><p>@${p.username}</p></div>

                </div>

            `;

            row.querySelector('.connection-clickable-zone').onclick = () => { closeConnectionsModal(); viewTargetUserProfile(key); };

            body.appendChild(row);

        });

    }

    modal.style.display = 'flex';

}

function closeConnectionsModal() {

    document.getElementById('connections-modal-overlay').style.display = 'none';

}

function openProfileEditMode() {

    document.getElementById('profile-container').style.display = 'none';

    document.getElementById('edit-profile-container').style.display = 'block';

    document.getElementById('edit-name').value = AppState.currentUser.name;

    document.getElementById('edit-username').value = AppState.currentUser.username;

    document.getElementById('edit-bio').value = AppState.currentUser.bio;

    document.getElementById('edit-address').value = AppState.currentUser.address;

    AppState.tempAvatarBase64 = null;

    document.getElementById('edit-avatar-preview').style.display = 'none';

}

function saveProfileChanges() {

    const oldUsername = AppState.currentUser.username;

    const newUsername = document.getElementById('edit-username').value.trim();

    AppState.currentUser.name = document.getElementById('edit-name').value;

    AppState.currentUser.username = newUsername;

    AppState.currentUser.bio = document.getElementById('edit-bio').value;

    AppState.currentUser.address = document.getElementById('edit-address').value;

    if (AppState.tempAvatarBase64) AppState.currentUser.avatar = AppState.tempAvatarBase64;

    if(oldUsername !== newUsername) {

        AppState.profiles[newUsername] = AppState.currentUser;

        delete AppState.profiles[oldUsername];

    }

    document.getElementById('header-user-avatar').src = AppState.currentUser.avatar;

    viewTargetUserProfile(newUsername);

}

function processAvatarFile(input) {

    const file = input.files[0]; if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {

        AppState.tempAvatarBase64 = e.target.result;

        const p = document.getElementById('edit-avatar-preview');

        p.src = e.target.result; p.style.display = 'inline-block';

    };

    reader.readAsDataURL(file);

}

function triggerDirectorySearch() {

    const q = document.getElementById('search-input').value.toLowerCase().trim();

    const targetBody = document.getElementById('search-results-display');

    targetBody.innerHTML = '';

    let matches = Object.keys(AppState.profiles).filter(k => k.includes(q) || AppState.profiles[k].name.toLowerCase().includes(q));

    if(matches.length === 0) {

        targetBody.innerHTML = '<p style="font-size:0.85rem;color:#707e8a;">No systems match specified parameters.</p>';

    } else {

        matches.forEach(key => {

            const p = AppState.profiles[key];

            const div = document.createElement('div'); div.className = 'dm-user-entry-row';

            div.innerHTML = `<img src="${p.avatar}"><div class="dm-preview-meta"><h4>${p.name}</h4><p>@${p.username} — ${p.bio}</p></div>`;

            div.onclick = () => viewTargetUserProfile(key);

            targetBody.appendChild(div);

        });

    }

}

// Human Profiles DM Hub Logics

function buildDmThreadsDirectory() {

    const listContainer = document.getElementById('dm-threads-list');

    listContainer.innerHTML = '';

    Object.keys(AppState.directMessages).forEach(userKey => {

        const profile = AppState.profiles[userKey];

        const messages = AppState.directMessages[userKey];

        const lastMsgText = messages.length > 0 ? messages[messages.length - 1].text : "No logs recorded yet.";

        const prefixSelf = (messages.length > 0 && messages[messages.length - 1].sender === 'self') ? 'You: ' : '';

        const row = document.createElement('div'); row.className = 'dm-user-entry-row';

        row.innerHTML = `<img src="${profile.avatar}"><div class="dm-preview-meta"><h4>${profile.name}</h4><p>${prefixSelf}${lastMsgText}</p></div>`;

        row.onclick = () => openActiveDmWindowSpace(userKey);

        listContainer.appendChild(row);

    });

}

function openActiveDmWindowSpace(userKey) {

    AppState.activeDmUserKey = userKey;

    document.getElementById('dm-chat-target-title').textContent = AppState.profiles[userKey].name;

    document.getElementById('active-dm-chat-window').style.display = 'flex';

    renderDmBubblesLog();

}

function renderDmBubblesLog() {

    const box = document.getElementById('dm-chat-messages-box'); box.innerHTML = '';

    (AppState.directMessages[AppState.activeDmUserKey] || []).forEach(m => {

        const b = document.createElement('div');

        b.className = `msg-bubble ${m.sender === 'self' ? 'outgoing' : 'incoming'}`;

        b.textContent = m.text; box.appendChild(b);

    });

    box.scrollTop = box.scrollHeight;

}

function sendDirectMessage() {

    const field = document.getElementById('dm-chat-input-field'); const txt = field.value.trim();

    if(!txt) return;

    if (!AppState.directMessages[AppState.activeDmUserKey]) AppState.directMessages[AppState.activeDmUserKey] = [];

    AppState.directMessages[AppState.activeDmUserKey].push({ sender: 'self', text: txt });

    field.value = ''; renderDmBubblesLog();

    setTimeout(() => {

        let norm = txt.toLowerCase().replace(/[?,.!]/g, ""); let reply = "System parameter acknowledged.";

        if(norm === "hey" || norm === "hello" || norm === "hi") reply = "How are you?";

        else if(norm === "how are you") reply = "I am doing well, working on the pipeline script parameters alignment. Everything is smooth!";

        AppState.directMessages[AppState.activeDmUserKey].push({ sender: AppState.activeDmUserKey, text: reply });

        renderDmBubblesLog();

    }, 600);

}

function closeActiveDmWindow() {

    document.getElementById('active-dm-chat-window').style.display = 'none';

    AppState.activeDmUserKey = null; buildDmThreadsDirectory();

}

function sendAiMessage() {

    const input = document.getElementById('ai-input'); const val = input.value.trim(); if (!val) return;

    const box = document.getElementById('ai-chat-box');

    box.innerHTML += `<div class="user-msg"><strong>You:</strong> ${val}</div>`; input.value = '';

    setTimeout(() => {

        box.innerHTML += `<div class="ai-msg"><strong>🤖 System AI Core:</strong> Analysis compiled for query block target "${val}".</div>`;

        box.scrollTop = box.scrollHeight;

    }, 450);

}

// Follow Operations and Notifications Pipeline

function handleFollowToggle(btn) {

    const viewedKey = document.getElementById('profile-container').dataset.activeViewedKey;

    const target = AppState.profiles[viewedKey]; if(!target) return;

    const selfKey = AppState.currentUser.username;

    if (btn.classList.contains('following-state')) {

        btn.classList.remove('following-state'); btn.textContent = 'Follow';

        target.followers = target.followers.filter(k => k !== selfKey);

        AppState.currentUser.following = AppState.currentUser.following.filter(k => k !== viewedKey);

    } else {

        btn.classList.add('following-state'); btn.textContent = 'Following';

        target.followers.push(selfKey); AppState.currentUser.following.push(viewedKey);

        setTimeout(() => { executeFollowBackEvent(viewedKey); }, 500);

    }

    document.getElementById('stat-followers-cnt').textContent = target.followers.length;

    if (AppState.activeFeedTab === "following") buildTimelineFeed();

}

function executeFollowBackEvent(userKey) {

    const ind = AppState.profiles[userKey]; if (!ind) return;

    if (!ind.following.includes(AppState.currentUser.username)) {

        ind.following.push(AppState.currentUser.username);

        if (!AppState.currentUser.followers.includes(userKey)) AppState.currentUser.followers.push(userKey);

        const targetContainer = document.getElementById('notifications-stream-target');

        const alertBlock = document.createElement('div');

        alertBlock.className = 'notification-item active-alert';

        alertBlock.innerHTML = `<p>🤝 <strong>${ind.name}</strong> (@${ind.username}) followed you back!</p>`;

        targetContainer.insertBefore(alertBlock, targetContainer.firstChild);

        if (document.getElementById('profile-container').dataset.activeViewedKey === AppState.currentUser.username) {

            document.getElementById('stat-followers-cnt').textContent = AppState.currentUser.followers.length;

        }

    }

}

function toggleSettingsMenu(e) {

    e.stopPropagation(); const d = document.getElementById('profile-settings-dropdown');

    d.style.display = d.style.display === 'block' ? 'none' : 'block';

}

function handleLogout() {

    AppState.currentUser = null;

    document.getElementById('profile-container').style.display = 'none';

    document.getElementById('x-global-header').style.display = 'none';

    document.getElementById('x-global-footer-dock').style.display = 'none';

    document.getElementById('auth-container').style.display = 'block';

    toggleAuthView('login');

}

document.addEventListener('click', () => {

    if(document.getElementById('profile-settings-dropdown')) document.getElementById('profile-settings-dropdown').style.display = 'none';

});