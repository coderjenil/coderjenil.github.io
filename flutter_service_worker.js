'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cb4161baa2dc65dc3bdc9028c22e86ec",
"assets/AssetManifest.bin.json": "5cf56a62605ac8368564a554eaea2ec5",
"assets/AssetManifest.json": "55af9aae3de7524538242993ffc7827d",
"assets/assets/empty_images/contact_us.png": "a682811a3d73d2abb52113a2e9959cc4",
"assets/assets/empty_images/contest_refer_img.png": "24881a191e41a4255be80e9e34588a63",
"assets/assets/empty_images/empty_contest_join.png": "f71fffa35322a22a0763f2d6563b25f7",
"assets/assets/empty_images/empty_team.png": "0b5268d16432ee911b77c3c85d8643f4",
"assets/assets/empty_images/ground_bg.png": "6f159244ea34a9ecd1531b62209a7e06",
"assets/assets/empty_images/ground_theme.png": "7a0495f85d7c34d8f8456bb96aaf9d99",
"assets/assets/empty_images/help&support.png": "9fca1ede051282e6a13c4a0c4d2e0a79",
"assets/assets/empty_images/invite_friends.png": "a71f38eff341f2153bf76d9b340c4f99",
"assets/assets/empty_images/kyc_verification.png": "882c28b6895d32255b3dcd5f8fa1de2e",
"assets/assets/empty_images/matchScoreboard.png": "0b62fc2f5fb02cd1fa732f96d55b73db",
"assets/assets/empty_images/mymatches_empty.png": "375a937ab915a20249662053fa622436",
"assets/assets/empty_images/share_contest.png": "24881a191e41a4255be80e9e34588a63",
"assets/assets/icon/appbar_icon/leaderboard_icon.svg": "a462d95ebb0d9bd45e520ce55ff888fa",
"assets/assets/icon/appbar_icon/letswinlogo.jpg": "1c38e648e2a87b81b5398204d9624709",
"assets/assets/icon/appbar_icon/Logo.svg": "e0313cbda1792c693002cf255e5f8067",
"assets/assets/icon/appbar_icon/notification_icon.svg": "3f225f17a28ee94febac41bf4e578e19",
"assets/assets/icon/appbar_icon/wallet_icon.svg": "0f76d6b18b616bb33727047fb7da2030",
"assets/assets/icon/bottombar_icon/home_icon.png": "499c8025e27c38c313edf5b377ac7686",
"assets/assets/icon/bottombar_icon/more_icon.png": "b021bd595011a5c8862efe8ed37041dd",
"assets/assets/icon/bottombar_icon/person_add.png": "ec2ede5b00c74c6c72f66a9b810fbdf7",
"assets/assets/icon/bottombar_icon/speaker.png": "909d74eaec502114bbc04a875560a242",
"assets/assets/icon/bottombar_icon/trophy_icon.png": "63c763fefb2f58b2b3c93ee695605e3d",
"assets/assets/icon/drawer_icon/connection_icon.svg": "91b147ff3f7af638ee7bd3ffdc406dda",
"assets/assets/icon/drawer_icon/help_icon.svg": "f9fc0e0bb7a121a577947da11b238673",
"assets/assets/icon/drawer_icon/how_to_play_icon.svg": "e63694c2904051c2f728d2e1c0bd04bc",
"assets/assets/icon/drawer_icon/inbox_icon.svg": "bc966acf52e9087ceccd97d1c85f56cc",
"assets/assets/icon/drawer_icon/kyc_icon.svg": "78938d83d9755241479232b2c35efef6",
"assets/assets/icon/drawer_icon/leaderboard_icon.svg": "a14d278d3b4f04e016273089ef2a3e4e",
"assets/assets/icon/drawer_icon/legality_icon.svg": "71c3e12f9cd25226858f25c9eee42c8d",
"assets/assets/icon/drawer_icon/partner_icon.svg": "795f01a01011a53aa0bb8927786c5784",
"assets/assets/icon/drawer_icon/point_system_icon.svg": "7cb1f100f640e944c289f0255fcfa0bb",
"assets/assets/icon/drawer_icon/private_contest_icon.svg": "b6a3a537d33def40fd8fb33472dedcef",
"assets/assets/icon/drawer_icon/prize_icon.svg": "bbab62ee71473982921dd8ea94150561",
"assets/assets/icon/drawer_icon/refer&earn_icon.svg": "3888fad4a619e9d419e47946a4158a09",
"assets/assets/icon/drawer_icon/responsible_play_icon.svg": "e4246ffcc1816d5050572d26f929fb90",
"assets/assets/icon/drawer_icon/reward_icon.svg": "f1d80990ec1087bbbcfd6f00e0b00f59",
"assets/assets/icon/drawer_icon/setting_icon.svg": "2b82f7bd74494105d0ce1e355f134a46",
"assets/assets/icon/drawer_icon/shield_icon.svg": "a3c4a70432ca35f042727cfbefb8e92f",
"assets/assets/icon/drawer_icon/subscribe_us_icon.svg": "752bc0b2d35a79dec843bdcf4488938e",
"assets/assets/icon/drawer_icon/term&service_icon.svg": "b1efed0fb6bf7bc6159472b823346ca9",
"assets/assets/icon/drawer_icon/ticket_icon.svg": "f83f7e63f6a27f2741bb26f7e63fe873",
"assets/assets/icon/drawer_icon/token_icon.svg": "24e542c140f1787ffe2cf599b3dcd2c1",
"assets/assets/icon/drawer_icon/version_icon.svg": "2cc68ab2253ed2e9570c64c30a904585",
"assets/assets/icon/drawer_icon/wallet_icon.svg": "2ce3e14bf6352e7b2e21f07feabeb496",
"assets/assets/icon/drawer_icon/winners_icon.svg": "f8251e1770c0e9eef5b1bda392f7303c",
"assets/assets/icon/more_screen_icon/about_us_icon.svg": "d59b00189ab6470335f27ee3811a47d3",
"assets/assets/icon/more_screen_icon/fantasy_point_icon.svg": "ccff18fb9da37122ae0d0c1cba2254ea",
"assets/assets/icon/more_screen_icon/gst_icon.svg": "5dd0a3f4aabb516f514bcd9c9265fa9d",
"assets/assets/icon/more_screen_icon/help_icon.svg": "b1511ac81b4771a9bde923f8cdcffc33",
"assets/assets/icon/more_screen_icon/how_to_play_icon.svg": "a884d437ec4e8d2bdc13f13096f2713d",
"assets/assets/icon/more_screen_icon/invite_friend_icon.svg": "78ac74a263e6377fd9acc242794c973c",
"assets/assets/icon/more_screen_icon/legality_icon.svg": "9b0b5fe7d1ee1773448e01214857d0de",
"assets/assets/icon/more_screen_icon/profile_icon.svg": "54a447abc7507ff013bb59684cffdc50",
"assets/assets/icon/more_screen_icon/refer_list_icon.svg": "76fdcdee349fa599ada2555970f46084",
"assets/assets/icon/more_screen_icon/refund_policy_icon.svg": "4ed47682044e1178a09eb610eddce847",
"assets/assets/icon/more_screen_icon/verify_account_icon.svg": "718a6cb7fce3ed699470c3bbd477e12f",
"assets/assets/icon/more_screen_icon/withdraw_cash_icon.svg": "2655aa0e5539217f3f78198da8eea505",
"assets/assets/icon/png_icon/adhar_icon.png": "9701776d04098f1e4495e7ea4f7eb3d3",
"assets/assets/icon/png_icon/balance_wallet_icon.png": "5b2c765f03f1a2bde046433f9c4fc9ac",
"assets/assets/icon/png_icon/contact_us.png": "94cdecae99afcd3ab0b18c52c604d33f",
"assets/assets/icon/png_icon/done.png": "d5d4608d606334734bef4fe5d262d1a8",
"assets/assets/icon/png_icon/Dream_Team.png": "3ca59cdb0e07a8f1401a522dd1862547",
"assets/assets/icon/png_icon/filter_icon.png": "0f6fadf57acbd6cc12c3963ce1694c95",
"assets/assets/icon/png_icon/pan_card_icon.png": "dea0a8b340379c15c0a881237bcd83ca",
"assets/assets/icon/png_icon/proof_icon.png": "755ccaa4767937e7599751a742dd0bcd",
"assets/assets/icon/png_icon/select_sub.png": "dfcc5daeb8bc18673506954b221ae316",
"assets/assets/icon/png_icon/spinner.png": "7a776bb6251fafb71de48d86678e062f",
"assets/assets/icon/png_icon/unselect_sub.png": "6df44aaaee19652f18c993a6f8352417",
"assets/assets/icon/png_icon/withdraw_success.png": "cea83715756766625439999a9b5fb39a",
"assets/assets/icon/svg_icon/1st.svg": "017e39cf1c0637388d1eb574e7e7f9e7",
"assets/assets/icon/svg_icon/allRound_icon.svg": "94da3af5fa0e68aeb802c368cf11c8fc",
"assets/assets/icon/svg_icon/ar_icon.svg": "7b3898071ecd26769fe7b08ad655d283",
"assets/assets/icon/svg_icon/attch_media.svg": "fafd13ea07f2245430c5ab7bc6363de6",
"assets/assets/icon/svg_icon/balanced_icon.svg": "21b7d01976f7127d8d6efceea5a4f678",
"assets/assets/icon/svg_icon/batting_icon.svg": "d089a09f2f5f12b495eef138cb7764f8",
"assets/assets/icon/svg_icon/bat_icon.svg": "b03c95579db6335a222af1287de03180",
"assets/assets/icon/svg_icon/bonus_reward.svg": "4ad34797640813c7602f7175d780f73a",
"assets/assets/icon/svg_icon/bowling_icon.svg": "8f52aa9a8f17dd573b287a1f270b25d0",
"assets/assets/icon/svg_icon/business.svg": "40640fd6c6512b176c2ac0a604368234",
"assets/assets/icon/svg_icon/callus.svg": "46a9c17aea3ba554ec794ba95396a7af",
"assets/assets/icon/svg_icon/captain_tag.svg": "2f46117c61ef0d904d94815cbac69cf3",
"assets/assets/icon/svg_icon/chat_with_us.svg": "0b02a0a1e19f7f0a0657ece9f9842385",
"assets/assets/icon/svg_icon/coin_icon.svg": "4de970a45fa0df94b001989c5d563375",
"assets/assets/icon/svg_icon/disclaimer_icon.svg": "ab5a6a00b7201fafa092ec41003400d9",
"assets/assets/icon/svg_icon/discount.svg": "bbd8af75ab0aff0078bb137cf2e1c4e3",
"assets/assets/icon/svg_icon/dot_line.svg": "3736ca12d3728b8833044f0ba44e94b6",
"assets/assets/icon/svg_icon/edit_icon.svg": "6bf91f04c6f8a45aabac88b182c48f9c",
"assets/assets/icon/svg_icon/email_us.svg": "154f380ed993bd14a7f3f4f7b68a4094",
"assets/assets/icon/svg_icon/facebook_us.svg": "676369ef6d69bef77845c6168ac9acad",
"assets/assets/icon/svg_icon/FAQS.svg": "17f216aeac9eb936feedb1b0235da21e",
"assets/assets/icon/svg_icon/feedback.svg": "c6ffda5056f8251b0a291641d32a33d1",
"assets/assets/icon/svg_icon/feedback_us.svg": "5584e985d8c349d135a7e8bb4bfd62f9",
"assets/assets/icon/svg_icon/fram.svg": "931515c91da10492c3e6a6153a0c24cd",
"assets/assets/icon/svg_icon/grand_league.svg": "ded00bbf6cb63a72fc2b7c1c24b85f6a",
"assets/assets/icon/svg_icon/guaranteed.svg": "642b1e2a7014c44ba9b4c7fdab0fc6ff",
"assets/assets/icon/svg_icon/heading_line.svg": "1c77661d50c7646144a8ca9a9b109eaa",
"assets/assets/icon/svg_icon/instagram.svg": "f0614e2cabebceada67a12c556d0071b",
"assets/assets/icon/svg_icon/invite_friends_facebook.svg": "0b12ed14797612e51a9b2f894ba72d4f",
"assets/assets/icon/svg_icon/invite_friend_instagram.svg": "d5368227272f1b9f38c5d2f2de975412",
"assets/assets/icon/svg_icon/invite_friend_telegram.svg": "7102af67af0fe3b25610da859f96ce95",
"assets/assets/icon/svg_icon/invite_friend_twitter.svg": "91a41019dd8da131c7c51a3f5c3cf71d",
"assets/assets/icon/svg_icon/invite_friend_whatsapp.svg": "5511d2b777e0adfda05a1ed5a49fcf97",
"assets/assets/icon/svg_icon/invite_friend_youtube.svg": "f905bade660b094cf1c00cabdd8d0fdd",
"assets/assets/icon/svg_icon/lineups_icon.svg": "9ac0eb14f9740c75b0401be86c25e9ad",
"assets/assets/icon/svg_icon/location.svg": "d09f9584072e7c4b968d465c205f680e",
"assets/assets/icon/svg_icon/mic_icon.svg": "7e6855f2c31ededf4166c5ab6164e2b1",
"assets/assets/icon/svg_icon/my_ticket.svg": "2bbc15fe551375248af478766af7343d",
"assets/assets/icon/svg_icon/my_ticket_changes.svg": "d64567635ddf2bf0fc30de8efe9eee05",
"assets/assets/icon/svg_icon/Other.svg": "fd79b9ecf6c96a2809b44f00f6b3a32b",
"assets/assets/icon/svg_icon/pacer_icon.svg": "dc864e936b78fec0300cc4ccb159958d",
"assets/assets/icon/svg_icon/Payment.svg": "61543e1b89c7e4f1ccfea0c8e0389772",
"assets/assets/icon/svg_icon/pin_icon.svg": "bebb22c0f612588d821accf42ee8f1f6",
"assets/assets/icon/svg_icon/raise_a_ticket.svg": "b4edc8c186933c07cb27bedfcd77e0d3",
"assets/assets/icon/svg_icon/recored_audio.svg": "a687e5ace6c65866cba88542816362a7",
"assets/assets/icon/svg_icon/red_ball.svg": "26ca8108736b385e5f7f82e5b7f9e614",
"assets/assets/icon/svg_icon/secure_icon.svg": "0256e445aa3929dc574f6790bfbdf0b4",
"assets/assets/icon/svg_icon/sign_up_bonus.svg": "4ad34797640813c7602f7175d780f73a",
"assets/assets/icon/svg_icon/single.svg": "bf527b7c128ff457ed72f85de4396e85",
"assets/assets/icon/svg_icon/sms.svg": "598161cc6b57182e5d58637e5c6f021c",
"assets/assets/icon/svg_icon/spinner.svg": "aab41ead5237a7149c6f43d22c3cddb9",
"assets/assets/icon/svg_icon/spinner_icon.svg": "77cd61837980a1d34812b5ee562e363c",
"assets/assets/icon/svg_icon/Technical.svg": "ed799bfee1f8b21d2ba9f44f2f55f6a8",
"assets/assets/icon/svg_icon/ticket.svg": "93fe2804934114e68b2585a40ef5004d",
"assets/assets/icon/svg_icon/tip_icon.svg": "c7247e3feb0b50115d06251bbd5b401f",
"assets/assets/icon/svg_icon/trophy_icon.svg": "a6c49dc3d41cd32ee64bafec15320072",
"assets/assets/icon/svg_icon/twitter.svg": "05173981173ecd5242a26994b1adb295",
"assets/assets/icon/svg_icon/ultimate_team_tag.svg": "7c3507cbe6c5e6134829ca85fc8d7b0c",
"assets/assets/icon/svg_icon/vicecaptain_tag.svg": "c05362a0563497fa874aff4906e7ed84",
"assets/assets/icon/svg_icon/warning_icon.svg": "eaf4c4fc490b585a26a8cedf9e040231",
"assets/assets/icon/svg_icon/weather_icon.svg": "ccc797f354c0a480b078e644477055ae",
"assets/assets/icon/svg_icon/whatsapp.svg": "abcc63b2d715d8f64b7cd59a0c10ae39",
"assets/assets/icon/svg_icon/whatsapp_icon.svg": "99edaebdf7a39e7bce49f6a07b2ad0b1",
"assets/assets/icon/svg_icon/winner.svg": "463b53f0d5815936b7f884f2aaf5ee2e",
"assets/assets/icon/svg_icon/wk_icon.svg": "3bbf0ca481c99a8379b2eb934e4cc508",
"assets/assets/icon/svg_icon/youtube.svg": "acb123f3c42d0401c9d652ad25bc92e1",
"assets/assets/icon/wallet_icon/add_cash_icon.svg": "8ab3593f97cbb08c637342b408550ffc",
"assets/assets/icon/wallet_icon/amount_wallet_icon.svg": "c336a401be7adeee3785dbf4144e4079",
"assets/assets/icon/wallet_icon/bonus_coin_icon.svg": "35cd260925f40f740e1ca90d36bcd76a",
"assets/assets/icon/wallet_icon/deposite_wallet.svg": "7ab5f073cd026c5739bebe9ce75285d6",
"assets/assets/icon/wallet_icon/kyc_icon.svg": "7f7196465636b7062976b9c4b057f51d",
"assets/assets/icon/wallet_icon/need_help_icon.svg": "9d60f78290d6b98ac8adffcc0748515c",
"assets/assets/icon/wallet_icon/offer_icon.svg": "ffd5bf719d909f6e032b0b24d51e254c",
"assets/assets/icon/wallet_icon/tds_dashboard_icon.svg": "c06b53eae182eed8f178d5b547d11b1d",
"assets/assets/icon/wallet_icon/transection_history_icon.svg": "858de49e2f22c199534a1b9bfdc2da88",
"assets/assets/icon/wallet_icon/trophy_icon.svg": "110dcec1958c0011f6f44b13f653eb93",
"assets/assets/icon/wallet_icon/winning_amount_icon.svg": "4e6d8e886148d214d2c48b8b4aaab552",
"assets/assets/icon/wallet_icon/winning_tag.svg": "5e2fb24d34e357e5ef9ab84c7a4c27a5",
"assets/assets/icon/wallet_icon/withdraw_money_icon.svg": "8db7f9cb4546d96a1c069b5040e5835e",
"assets/assets/lottie_file/success_lottie.json": "a0e14fea6a5054e69158924b34a4270a",
"assets/assets/resource/en-US.json": "a89c7311c285f1330626d9121d2b2e01",
"assets/assets/resource/hi-IN.json": "bfb18b79fb6446324bfe757d901b9272",
"assets/assets/ui_element/batting.png": "3940ba5052275f9dbabf28a4405652f8",
"assets/assets/ui_element/bowling.png": "c2be25289fd486685ea9a0445052ed71",
"assets/assets/ui_element/captain.png": "04dc041bc9fa8adc7b821daf8a0bc382",
"assets/assets/ui_element/contest_discount.png": "987db134f889429912b6b00f82e86493",
"assets/assets/ui_element/dot_line.png": "69239b1b813b6c2ca0aa344a45a1d261",
"assets/assets/ui_element/eco_bowl.png": "b3f4967e9413982245b327f476d257fe",
"assets/assets/ui_element/fielding.png": "832e23a7bf331106fd0280b2d29b5936",
"assets/assets/ui_element/full_line.png": "c60a51d1d60aef6bf1cd5f754ef0e87b",
"assets/assets/ui_element/impact.svg": "2f4f275cb81e93f1e444ebaf3856502c",
"assets/assets/ui_element/invite_friends.png": "a71f38eff341f2153bf76d9b340c4f99",
"assets/assets/ui_element/leaderbagroundtheme.png": "facdef6047513d9a7a2857528e0dffa4",
"assets/assets/ui_element/not_playing.svg": "60f3c2dd8d27f539d95d4b56a9ac2463",
"assets/assets/ui_element/playing.svg": "d9931625da116626423d73f698996cb7",
"assets/assets/ui_element/rectangle1.png": "f97201c89989beaa693052c258f7109e",
"assets/assets/ui_element/rectangle2.png": "d72e6591868af35785a267cee3990cd4",
"assets/assets/ui_element/rectangle3.png": "cf4a1cd288797cf22d095cdde65becb4",
"assets/assets/ui_element/runrate.png": "42e246a98930d12057bd503eadec4fe6",
"assets/assets/ui_element/skew_container.png": "61bdd6f2333ef4496c479f6baacb2373",
"assets/assets/ui_element/success_bg.png": "73e90f575ba6dff6b682d1cae7eafc1f",
"assets/assets/ui_element/tabbg.png": "72c70d7817121ca1e75f73e6f6f4cf39",
"assets/assets/ui_element/teasure.png": "206694b0b0b012f7a202be3d3be30e4b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "24ec4497db4273ba21f6a368bc3645d1",
"assets/NOTICES": "07b90399a84f901d04e6753b794134de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_cashfree_pg_sdk/assets/amex.png": "99f1d408e289af3e6359feffc5abc003",
"assets/packages/flutter_cashfree_pg_sdk/assets/credit-card-default.png": "e987949373676bb7b9a6bb85c19dba1b",
"assets/packages/flutter_cashfree_pg_sdk/assets/diners.png": "6bc0a26fbe98312d2cde3ca06a9b9518",
"assets/packages/flutter_cashfree_pg_sdk/assets/discover.png": "8fb5c3dd58ffb198644a9aac0d0a5da2",
"assets/packages/flutter_cashfree_pg_sdk/assets/jcb.png": "903e2793c61fc15e48fed184d6eadbe7",
"assets/packages/flutter_cashfree_pg_sdk/assets/maestro.png": "49f3167896883d38eb9770f6527fa961",
"assets/packages/flutter_cashfree_pg_sdk/assets/mastercard.png": "64dd58b0f24ee7bf272d964f508660bb",
"assets/packages/flutter_cashfree_pg_sdk/assets/rupay.png": "b6c88a3273204df54bc46e374b633570",
"assets/packages/flutter_cashfree_pg_sdk/assets/visa.png": "3442819455f79b208c50094bae6843e8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "730a4aea0d171bd447aa6f373f471a56",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "421f0cb101aac862a9a47c0b3fa05ced",
"/": "421f0cb101aac862a9a47c0b3fa05ced",
"main.dart.js": "ff3487b5f26132f84316c8afbf9e53d9",
"manifest.json": "b26ebb7401ee77df17488dc0d6b1a03f",
"version.json": "4e0361262ede820d536ac11287935bb5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
