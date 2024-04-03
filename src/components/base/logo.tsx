"use client";

export function DropLogo() {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="1.5"
        width="87"
        height="87"
        rx="18.5"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M16.3466 55H9.64347V36.0909H16.402C18.304 36.0909 19.9413 36.4695 21.3139 37.2266C22.6866 37.9775 23.7422 39.0578 24.4808 40.4673C25.2256 41.8769 25.598 43.5634 25.598 45.527C25.598 47.4967 25.2256 49.1894 24.4808 50.6051C23.7422 52.0208 22.6804 53.1072 21.2955 53.8643C19.9167 54.6214 18.267 55 16.3466 55ZM13.6413 51.5746H16.1804C17.3622 51.5746 18.3563 51.3653 19.1626 50.9467C19.9751 50.522 20.5845 49.8665 20.9908 48.9801C21.4032 48.0876 21.6094 46.9366 21.6094 45.527C21.6094 44.1297 21.4032 42.9879 20.9908 42.1016C20.5845 41.2152 19.9782 40.5627 19.1719 40.1442C18.3655 39.7256 17.3714 39.5163 16.1896 39.5163H13.6413V51.5746ZM28.5595 55V36.0909H36.0197C37.4477 36.0909 38.6665 36.3464 39.676 36.8572C40.6916 37.362 41.4641 38.0791 41.9934 39.0085C42.5289 39.9318 42.7967 41.0182 42.7967 42.2678C42.7967 43.5234 42.5259 44.6037 41.9842 45.5085C41.4425 46.4072 40.6577 47.0966 39.6298 47.5767C38.608 48.0568 37.3708 48.2969 35.9181 48.2969H30.9231V45.0838H35.2718C36.0351 45.0838 36.6691 44.9792 37.1738 44.7699C37.6786 44.5606 38.054 44.2467 38.3002 43.8281C38.5526 43.4096 38.6788 42.8894 38.6788 42.2678C38.6788 41.6399 38.5526 41.1106 38.3002 40.6797C38.054 40.2488 37.6755 39.9226 37.1646 39.701C36.6599 39.4732 36.0228 39.3594 35.2534 39.3594H32.5574V55H28.5595ZM38.7711 46.3949L43.4707 55H39.0574L34.4593 46.3949H38.7711ZM62.9984 45.5455C62.9984 47.6075 62.6075 49.3617 61.8258 50.8082C61.0502 52.2547 59.9915 53.3596 58.6497 54.1229C57.314 54.88 55.8121 55.2585 54.144 55.2585C52.4636 55.2585 50.9556 54.8769 49.6199 54.1136C48.2842 53.3504 47.2285 52.2455 46.4529 50.799C45.6774 49.3525 45.2896 47.6013 45.2896 45.5455C45.2896 43.4834 45.6774 41.7292 46.4529 40.2827C47.2285 38.8362 48.2842 37.7344 49.6199 36.9773C50.9556 36.214 52.4636 35.8324 54.144 35.8324C55.8121 35.8324 57.314 36.214 58.6497 36.9773C59.9915 37.7344 61.0502 38.8362 61.8258 40.2827C62.6075 41.7292 62.9984 43.4834 62.9984 45.5455ZM58.9451 45.5455C58.9451 44.2098 58.7451 43.0833 58.345 42.1662C57.9511 41.2491 57.394 40.5535 56.6738 40.0795C55.9537 39.6056 55.1104 39.3686 54.144 39.3686C53.1776 39.3686 52.3343 39.6056 51.6142 40.0795C50.894 40.5535 50.3339 41.2491 49.9338 42.1662C49.5398 43.0833 49.3429 44.2098 49.3429 45.5455C49.3429 46.8812 49.5398 48.0076 49.9338 48.9247C50.3339 49.8419 50.894 50.5374 51.6142 51.0114C52.3343 51.4853 53.1776 51.7223 54.144 51.7223C55.1104 51.7223 55.9537 51.4853 56.6738 51.0114C57.394 50.5374 57.9511 49.8419 58.345 48.9247C58.7451 48.0076 58.9451 46.8812 58.9451 45.5455ZM65.9599 55V36.0909H73.4201C74.8543 36.0909 76.0761 36.3648 77.0856 36.9126C78.0951 37.4543 78.8645 38.2083 79.3938 39.1747C79.9293 40.1349 80.1971 41.2429 80.1971 42.4986C80.1971 43.7543 79.9263 44.8622 79.3846 45.8224C78.8429 46.7827 78.0581 47.5305 77.0302 48.0661C76.0084 48.6016 74.7712 48.8693 73.3185 48.8693H68.5636V45.6655H72.6722C73.4416 45.6655 74.0756 45.5331 74.5742 45.2685C75.079 44.9976 75.4544 44.6252 75.7006 44.1513C75.953 43.6712 76.0792 43.1203 76.0792 42.4986C76.0792 41.8707 75.953 41.3229 75.7006 40.8551C75.4544 40.3812 75.079 40.0149 74.5742 39.7564C74.0695 39.4917 73.4293 39.3594 72.6538 39.3594H69.9577V55H65.9599Z"
        fill="black"
      />
      <path
        d="M22.4205 31H17.2642V16.4545H22.4631C23.9261 16.4545 25.1856 16.7457 26.2415 17.3281C27.2973 17.9058 28.1094 18.7367 28.6776 19.821C29.2505 20.9053 29.5369 22.2027 29.5369 23.7131C29.5369 25.2282 29.2505 26.5303 28.6776 27.6193C28.1094 28.7083 27.2926 29.544 26.2273 30.1264C25.1667 30.7088 23.8977 31 22.4205 31ZM20.3395 28.3651H22.2926C23.2017 28.3651 23.9664 28.2041 24.5866 27.8821C25.2116 27.5554 25.6804 27.0511 25.9929 26.3693C26.3101 25.6828 26.4688 24.7973 26.4688 23.7131C26.4688 22.6383 26.3101 21.7599 25.9929 21.0781C25.6804 20.3963 25.214 19.8944 24.5938 19.5724C23.9735 19.2505 23.2088 19.0895 22.2997 19.0895H20.3395V28.3651ZM31.815 31V16.4545H37.5536C38.6521 16.4545 39.5896 16.651 40.3661 17.044C41.1474 17.4323 41.7416 17.9839 42.1488 18.6989C42.5607 19.4091 42.7667 20.2448 42.7667 21.206C42.7667 22.1719 42.5584 23.0028 42.1417 23.6989C41.725 24.3902 41.1213 24.9205 40.3306 25.2898C39.5446 25.6591 38.5929 25.8438 37.4755 25.8438H33.6332V23.3722H36.9783C37.5655 23.3722 38.0531 23.2917 38.4414 23.1307C38.8297 22.9697 39.1185 22.7282 39.3079 22.4062C39.502 22.0843 39.5991 21.6842 39.5991 21.206C39.5991 20.723 39.502 20.3158 39.3079 19.9844C39.1185 19.6529 38.8273 19.402 38.4343 19.2315C38.046 19.0563 37.556 18.9688 36.9641 18.9688H34.8903V31H31.815ZM39.6701 24.3807L43.2852 31H39.8903L36.3533 24.3807H39.6701ZM58.3065 23.7273C58.3065 25.3134 58.0058 26.6629 57.4045 27.7756C56.8079 28.8883 55.9935 29.7382 54.9613 30.3253C53.9338 30.9077 52.7785 31.1989 51.4954 31.1989C50.2028 31.1989 49.0427 30.9053 48.0153 30.3182C46.9878 29.7311 46.1758 28.8812 45.5792 27.7685C44.9826 26.6558 44.6843 25.3087 44.6843 23.7273C44.6843 22.1411 44.9826 20.7917 45.5792 19.679C46.1758 18.5663 46.9878 17.7187 48.0153 17.1364C49.0427 16.5492 50.2028 16.2557 51.4954 16.2557C52.7785 16.2557 53.9338 16.5492 54.9613 17.1364C55.9935 17.7187 56.8079 18.5663 57.4045 19.679C58.0058 20.7917 58.3065 22.1411 58.3065 23.7273ZM55.1886 23.7273C55.1886 22.6998 55.0347 21.8333 54.7269 21.1278C54.4239 20.4223 53.9954 19.8873 53.4414 19.5227C52.8874 19.1581 52.2388 18.9759 51.4954 18.9759C50.752 18.9759 50.1033 19.1581 49.5494 19.5227C48.9954 19.8873 48.5645 20.4223 48.2567 21.1278C47.9537 21.8333 47.8022 22.6998 47.8022 23.7273C47.8022 24.7547 47.9537 25.6212 48.2567 26.3267C48.5645 27.0322 48.9954 27.5672 49.5494 27.9318C50.1033 28.2964 50.752 28.4787 51.4954 28.4787C52.2388 28.4787 52.8874 28.2964 53.4414 27.9318C53.9954 27.5672 54.4239 27.0322 54.7269 26.3267C55.0347 25.6212 55.1886 24.7547 55.1886 23.7273ZM60.5845 31V16.4545H66.3232C67.4264 16.4545 68.3662 16.6652 69.1428 17.0866C69.9193 17.5033 70.5111 18.0833 70.9183 18.8267C71.3303 19.5653 71.5362 20.4176 71.5362 21.3835C71.5362 22.3494 71.3279 23.2017 70.9112 23.9403C70.4946 24.679 69.8909 25.2543 69.1001 25.6662C68.3142 26.0781 67.3625 26.2841 66.245 26.2841H62.5874V23.8196H65.7479C66.3397 23.8196 66.8274 23.7178 67.2109 23.5142C67.5992 23.3059 67.888 23.0194 68.0774 22.6548C68.2715 22.2855 68.3686 21.8617 68.3686 21.3835C68.3686 20.9006 68.2715 20.4792 68.0774 20.1193C67.888 19.7547 67.5992 19.473 67.2109 19.2741C66.8227 19.0705 66.3303 18.9688 65.7337 18.9688H63.6598V31H60.5845Z"
        fill="#9B9B9B"
      />
      <path
        d="M22.4205 74H17.2642V59.4545H22.4631C23.9261 59.4545 25.1856 59.7457 26.2415 60.3281C27.2973 60.9058 28.1094 61.7367 28.6776 62.821C29.2505 63.9053 29.5369 65.2027 29.5369 66.7131C29.5369 68.2282 29.2505 69.5303 28.6776 70.6193C28.1094 71.7083 27.2926 72.544 26.2273 73.1264C25.1667 73.7088 23.8977 74 22.4205 74ZM20.3395 71.3651H22.2926C23.2017 71.3651 23.9664 71.2041 24.5866 70.8821C25.2116 70.5554 25.6804 70.0511 25.9929 69.3693C26.3101 68.6828 26.4688 67.7973 26.4688 66.7131C26.4688 65.6383 26.3101 64.7599 25.9929 64.0781C25.6804 63.3963 25.214 62.8944 24.5938 62.5724C23.9735 62.2505 23.2088 62.0895 22.2997 62.0895H20.3395V71.3651ZM31.815 74V59.4545H37.5536C38.6521 59.4545 39.5896 59.651 40.3661 60.044C41.1474 60.4323 41.7416 60.9839 42.1488 61.6989C42.5607 62.4091 42.7667 63.2448 42.7667 64.206C42.7667 65.1719 42.5584 66.0028 42.1417 66.6989C41.725 67.3902 41.1213 67.9205 40.3306 68.2898C39.5446 68.6591 38.5929 68.8438 37.4755 68.8438H33.6332V66.3722H36.9783C37.5655 66.3722 38.0531 66.2917 38.4414 66.1307C38.8297 65.9697 39.1185 65.7282 39.3079 65.4062C39.502 65.0843 39.5991 64.6842 39.5991 64.206C39.5991 63.723 39.502 63.3158 39.3079 62.9844C39.1185 62.6529 38.8273 62.402 38.4343 62.2315C38.046 62.0563 37.556 61.9688 36.9641 61.9688H34.8903V74H31.815ZM39.6701 67.3807L43.2852 74H39.8903L36.3533 67.3807H39.6701ZM58.3065 66.7273C58.3065 68.3134 58.0058 69.6629 57.4045 70.7756C56.8079 71.8883 55.9935 72.7382 54.9613 73.3253C53.9338 73.9077 52.7785 74.1989 51.4954 74.1989C50.2028 74.1989 49.0427 73.9053 48.0153 73.3182C46.9878 72.7311 46.1758 71.8812 45.5792 70.7685C44.9826 69.6558 44.6843 68.3087 44.6843 66.7273C44.6843 65.1411 44.9826 63.7917 45.5792 62.679C46.1758 61.5663 46.9878 60.7187 48.0153 60.1364C49.0427 59.5492 50.2028 59.2557 51.4954 59.2557C52.7785 59.2557 53.9338 59.5492 54.9613 60.1364C55.9935 60.7187 56.8079 61.5663 57.4045 62.679C58.0058 63.7917 58.3065 65.1411 58.3065 66.7273ZM55.1886 66.7273C55.1886 65.6998 55.0347 64.8333 54.7269 64.1278C54.4239 63.4223 53.9954 62.8873 53.4414 62.5227C52.8874 62.1581 52.2388 61.9759 51.4954 61.9759C50.752 61.9759 50.1033 62.1581 49.5494 62.5227C48.9954 62.8873 48.5645 63.4223 48.2567 64.1278C47.9537 64.8333 47.8022 65.6998 47.8022 66.7273C47.8022 67.7547 47.9537 68.6212 48.2567 69.3267C48.5645 70.0322 48.9954 70.5672 49.5494 70.9318C50.1033 71.2964 50.752 71.4787 51.4954 71.4787C52.2388 71.4787 52.8874 71.2964 53.4414 70.9318C53.9954 70.5672 54.4239 70.0322 54.7269 69.3267C55.0347 68.6212 55.1886 67.7547 55.1886 66.7273ZM60.5845 74V59.4545H66.3232C67.4264 59.4545 68.3662 59.6652 69.1428 60.0866C69.9193 60.5033 70.5111 61.0833 70.9183 61.8267C71.3303 62.5653 71.5362 63.4176 71.5362 64.3835C71.5362 65.3494 71.3279 66.2017 70.9112 66.9403C70.4946 67.679 69.8909 68.2543 69.1001 68.6662C68.3142 69.0781 67.3625 69.2841 66.245 69.2841H62.5874V66.8196H65.7479C66.3397 66.8196 66.8274 66.7178 67.2109 66.5142C67.5992 66.3059 67.888 66.0194 68.0774 65.6548C68.2715 65.2855 68.3686 64.8617 68.3686 64.3835C68.3686 63.9006 68.2715 63.4792 68.0774 63.1193C67.888 62.7547 67.5992 62.473 67.2109 62.2741C66.8227 62.0705 66.3303 61.9688 65.7337 61.9688H63.6598V74H60.5845Z"
        fill="#9B9B9B"
      />
    </svg>
  );
}