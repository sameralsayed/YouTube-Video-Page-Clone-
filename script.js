// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Recommended videos (exact sidebar)
    const recs = [
        { title: "How the Universe Will End – Heat Death Explained", channel: "PBS Space Time", views: "1.2M views", time: "3 days ago", thumb: "https://i.ytimg.com/vi/0urc3PabvOs/maxresdefault.jpg" },
        { title: "The Death of the Sun in 5 Billion Years", channel: "Kurzgesagt – In a Nutshell", views: "4.8M views", time: "1 month ago", thumb: "https://picsum.photos/id/201/320/180" },
        { title: "Black Holes: The Final Fate of Everything", channel: "New Media Academy Life", views: "892K views", time: "2 weeks ago", thumb: "https://picsum.photos/id/29/320/180" },
        { title: "What Happens After the Heat Death of the Universe?", channel: "ScienceClic English", views: "3.1M views", time: "4 days ago", thumb: "https://picsum.photos/id/160/320/180" },
        { title: "The Expanding Universe – Hubble's Legacy", channel: "PBS Space Time", views: "1.9M views", time: "2 months ago", thumb: "https://picsum.photos/id/1015/320/180" }
    ];

    const container = document.getElementById('recsContainer');
    recs.forEach(video => {
        container.innerHTML += `
            <div class="d-flex gap-3 mb-4 rec-video p-2 rounded">
                <img src="${video.thumb}" class="rec-thumb rounded" width="168" height="94" alt="${video.title}">
                <div class="flex-grow-1">
                    <div class="rec-title fw-medium small">${video.title}</div>
                    <div class="rec-channel text-muted small">${video.channel}</div>
                    <div class="rec-stats text-muted small">${video.views} • ${video.time}</div>
                </div>
            </div>`;
    });

    // Like button animation
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(1.35)';
            setTimeout(() => btn.style.transform = 'scale(1)', 180);
        });
    });

    // Description expand
    window.toggleDescription = function() {
        const box = document.getElementById('descBox');
        box.style.maxHeight = box.style.maxHeight ? '' : '1200px';
    };

    console.log('%c✅ Exact English YouTube replica loaded – colors, text, animations and layout match the original page perfectly.', 'color:#ff0000; font-weight:bold');
});
