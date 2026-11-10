const ACCENTS = {
  emerald: { hex: "#059669", soft: "#ecfdf5", text: "#047857" },
  cyan: { hex: "#0891b2", soft: "#ecfeff", text: "#0e7490" },
  violet: { hex: "#7c3aed", soft: "#f5f3ff", text: "#6d28d9" },
  rose: { hex: "#e11d48", soft: "#fff1f2", text: "#be123c" },
  amber: { hex: "#d97706", soft: "#fffbeb", text: "#b45309" },
};

const ORGANELLES = [
  {
    id: "cell-wall",
    badge: "Tế bào Thực vật & Nấm",
    image: "img/cell-wall.svg",
    riddle: "Tôi bao bọc bên ngoài tế bào thực vật, tạo nên hình dạng cố định và bảo vệ tế bào khỏi áp suất thẩm thấu. Tôi là ai?",
    name: "Thành tế bào",
    english: "Cell Wall",
    structure: "Cấu tạo chủ yếu từ các sợi cellulose đan lưới vững chắc. Ở tế bào nấm là chitin, còn ở vi khuẩn là peptidoglycan.",
    function: "Quy định hình dạng tế bào, bảo vệ tế bào chống lại các tác nhân cơ học và áp suất thẩm thấu của nước.",
    explore: "Rau răm hay rau muống giòn tan khi ngâm nước lạnh là nhờ thành tế bào tích đủ nước căng bóng (sức căng trương nước)!",
    accent: "emerald",
  },
  {
    id: "plasma-membrane",
    badge: "Mọi tế bào (Nhân sơ & Nhân thực)",
    image: "img/plasma-membrane.svg",
    riddle: "Tôi là màng sinh chất khép kín, linh hoạt, kiểm soát nghiêm ngặt các chất ra vào tế bào theo cơ chế chọn lọc. Tôi là ai?",
    name: "Màng sinh chất",
    english: "Plasma Membrane",
    structure: "Cấu trúc khảm động gồm lớp kép phospholipid và các protein xuyên màng, gắn thêm cholesterol và carbohydrate.",
    function: "Bảo vệ tế bào, trao đổi chất có chọn lọc với môi trường, nhận diện tín hiệu từ các tế bào lân cận.",
    explore: "Màng sinh chất có tính 'lỏng' linh hoạt, các phân tử phospholipid và protein có thể di chuyển trôi nổi dọc theo bề mặt màng như những tảng băng trôi!",
    accent: "blue",
  },
  {
    id: "nucleus",
    badge: "Trung tâm điều khiển",
    image: "img/nucleus.svg",
    riddle: "Tôi chứa đựng vật liệu di truyền DNA, được bọc trong màng kép có các lỗ nhỏ và là 'bộ não' điều khiển mọi hoạt động sống. Tôi là ai?",
    name: "Nhân tế bào",
    english: "Nucleus",
    structure: "Được bao bọc bởi màng kép có lỗ màng nhân; bên trong chứa dịch nhân, chất nhiễm sắc (DNA + histone) và hạt nhân (nucleolus).",
    function: "Lưu giữ, bảo quản và truyền đạt thông tin di truyền; trung tâm điều hòa mọi hoạt động sinh hóa và phân bào của tế bào.",
    explore: "Nếu trải dài toàn bộ phân tử DNA trong một tế bào nhân của người ra, nó dài tới gần 2 mét nhưng lại được cuộn siêu gọn gàng trong nhân!",
    accent: "indigo",
  },
  {
    id: "cytoplasm",
    badge: "Môi trường tế bào",
    image: "img/cytoplasm.svg",
    riddle: "Tôi lấp đầy khoảng không gian bên trong tế bào, gồm dịch bào lỏng và các bào quan lơ lửng bên trong. Tôi là ai?",
    name: "Tế bào chất",
    english: "Cytoplasm",
    structure: "Gồm dịch tế bào (cytosol - dung dịch keo chứa nước, ion, enzyme) và hệ thống các bào quan khác nhau.",
    function: "Là nơi diễn ra phần lớn các phản ứng trao đổi chất của tế bào và là 'ngôi nhà' neo đậu của các bào quan.",
    explore: "Tế bào chất không đứng yên mà luôn chuyển động dòng chảy liên tục (sự chuyển vận tế bào chất) để phân phối chất dinh dưỡng nhanh hơn.",
    accent: "sky",
  },
  {
    id: "cytoskeleton",
    badge: "Tế bào Nhân thực (Eukaryote)",
    image: "img/cytoskeleton.svg",
    riddle: "Tôi là mạng lưới vi sợi, sợi trung gian và vi ống chăng khắp tế bào chất, giúp tế bào có hình dạng vững chắc và vận chuyển nội bào. Tôi là ai?",
    name: "Khung xương tế bào",
    english: "Cytoskeleton",
    structure: "Hệ thống mạng lưới phức tạp gồm vi sợi (actin), sợi trung gian (keratin...) và vi ống (tubulin).",
    function: "Duy trì hình dạng tế bào, neo giữ các bào quan, hỗ trợ sự chuyển động tế bào và phân chia tế bào.",
    explore: "Nhờ khung xương tế bào biến đổi linh hoạt, tế bào bạch cầu mới có thể nhô chân giả (pseudopodia) để bò và bắt vi khuẩn!",
    accent: "cyan",
  },
  {
    id: "ribosome",
    badge: "Nhà máy tổng hợp Protein",
    image: "img/ribosome.svg",
    riddle: "Tôi cực kỳ nhỏ bé, không có màng bao bọc, gồm hai tiểu phần lớn và nhỏ, chuyên lắp ráp các axit amin thành protein. Tôi là ai?",
    name: "Ribosome",
    english: "Ribosome",
    structure: "Cấu tạo từ rRNA và protein, gồm 1 tiểu phần lớn và 1 tiểu phần nhỏ. Không có màng bao bọc.",
    function: "Tổng hợp protein cho tế bào (tự do trong tế bào chất hoặc bám trên lưới nội chất hạt).",
    explore: "Một tế bào có thể chứa tới hàng triệu ribosome hoạt động không ngừng nghỉ để sản xuất ra các loại protein cấu trúc và enzyme sống còn!",
    accent: "teal",
  },
  {
    id: "endoplasmic-reticulum",
    badge: "Hệ thống màng nội bào",
    image: "img/endoplasmic-reticulum.svg",
    riddle: "Tôi gồm mạng lưới màng gấp nếp: một bên gắn ribosome chuyên làm protein, một bên không gắn ribosome chuyên tổng hợp lipid và khử độc. Tôi là ai?",
    name: "Lưới nội chất",
    english: "Endoplasmic Reticulum (ER)",
    structure: "Hệ thống màng đơn liên tục với màng nhân, chia thành Lưới nội chất hạt (có ribosome) và Lưới nội chất trơn (không ribosome).",
    function: "LNCH: Tổng hợp protein xuất bào. LNCT: Tổng hợp lipid, chuyển hóa carbohydrate và khử độc cho tế bào.",
    explore: "Tế bào gan người có Lưới nội chất trơn vô cùng phát triển để liên tục khử độc alcohol, thuốc và các hóa chất độc hại!",
    accent: "violet",
  },
  {
    id: "golgi",
    badge: "Trung tâm đóng gói & phân phối",
    image: "img/golgi.svg",
    riddle: "Tôi gồm các chồng túi màng dẹp hình đĩa khum, chuyên nhận sản phẩm từ lưới nội chất để biến đổi, đóng gói và dán tem xuất đi. Tôi là ai?",
    name: "Bộ máy Golgi",
    english: "Golgi Apparatus",
    structure: "Gồm các chồng túi màng dẹp xếp song song nhưng tách rời nhau hoàn toàn (hình đĩa khum cong).",
    function: "Sửa đổi, hoàn thiện, đóng gói và phân phối các sản phẩm protein và lipid đến đúng địa chỉ đích trong hoặc ngoài tế bào.",
    explore: "Bộ máy Golgi chính là nơi tạo ra túi tiết chứa enzyme tiêu hóa (lysosome) và sản xuất chất nhầy bảo vệ niêm mạc ruột!",
    accent: "amber",
  },
  {
    id: "mitochondria",
    badge: "Nhà máy năng lượng",
    image: "img/mitochondria.svg",
    riddle: "Tôi được ví như 'nhà máy điện' của tế bào, sở hữu màng kép với màng trong gấp nếp và chứa DNA riêng, chuyên sản xuất ATP. Tôi là ai?",
    name: "Ti thể",
    english: "Mitochondria",
    structure: "Màng kép: màng ngoài trơn, màng trong gấp nếp thành các mào (cristae). Chất nền chứa DNA vòng và ribosome riêng.",
    function: "Nơi diễn ra quá trình hô hấp tế bào, chuyển hóa năng lượng từ đường và dưỡng chất thành ATP cung cấp cho mọi hoạt động sống.",
    explore: "Bạn thừa hưởng 100% ti thể từ MẸ! Ti thể có DNA riêng tự nhân đôi, là bằng chứng sống cho thuyết tiến hóa nội cộng sinh.",
    accent: "rose",
  },
  {
    id: "chloroplast",
    badge: "Chỉ có ở Thực vật & Tảo",
    image: "img/chloroplast.svg",
    riddle: "Tôi mang sắc tố xanh lục, chứa hệ thống màng thylakoid xếp chồng lên nhau, chuyên thực hiện quang hợp chuyển năng lượng mặt trời thành chất hữu cơ. Tôi là ai?",
    name: "Lục lạp",
    english: "Chloroplast",
    structure: "Bào quan màng kép, bên trong chứa chất nền (stroma) và các túi thylakoid xếp chồng thành cấu trúc grana chứa diệp lục.",
    function: "Thực hiện quá trình quang hợp: hấp thu năng lượng ánh sáng mặt trời để tổng hợp chất hữu cơ từ $CO_2$ và $H_2O$.",
    explore: "Lục lạp và ti thể có rất nhiều điểm tương đồng kỳ lạ (cùng có màng kép, DNA riêng và tự sinh sản), củng cố giả thuyết chúng từng là vi khuẩn độc lập!",
    accent: "emerald",
  },
  {
    id: "lysosome",
    badge: "Túi tiêu hóa tế bào",
    image: "img/lysosome.svg",
    riddle: "Tôi là túi nhỏ chứa hàng chục loại enzyme thủy phân cực mạnh, chuyên dọn dẹp rác, tiêu hóa tế bào già cỗi hoặc mầm bệnh xâm nhập. Tôi là ai?",
    name: "Lysosome",
    english: "Lysosome",
    structure: "Túi màng đơn hình cầu chứa các enzyme thủy phân axit (acid hydrolase) hoạt động tốt ở môi trường pH thấp.",
    function: "Tiêu hóa nội bào: phân giải các tế bào quan già cỗi, thức ăn thừa hoặc vi khuẩn bị đại thực bào nuốt lấy.",
    explore: "Khi nòng nọc biến thành ếch, chính các Lysosome tự động giải phóng enzyme để tiêu hủy phần đuôi của nòng nọc một cách có trật tự!",
    accent: "orange",
  },
  {
    id: "vacuole",
    badge: "Kho chứa lớn của tế bào",
    image: "img/vacuole.svg",
    riddle: "Tôi là chiếc túi dịch lớn ở thực vật, chiếm phần lớn thể tích tế bào, làm nhiệm vụ dự trữ nước, chất dinh dưỡng, sắc tố hoặc chất độc chống sâu bọ. Tôi là ai?",
    name: "Không bào",
    english: "Vacuole",
    structure: "Hệ thống túi màng đơn chứa dịch không bào (nước, muối khoáng, chất hữu cơ, sắc tố). Ở thực vật có không bào trung tâm rất lớn.",
    function: "Dự trữ chất dinh dưỡng, nước, ion, duy trì áp suất thẩm thấu (sức căng trương nước) và chứa sắc tố tạo màu cho hoa quả.",
    explore: "Màu đỏ mọng của cánh hoa hồng hay vị chua của quả chanh phần lớn được quyết định bởi các chất dịch nằm bên trong không bào!",
    accent: "lime",
  },
  {
    id: "peroxisome",
    badge: "Túi khử độc chuyên hóa",
    image: "img/peroxisome.svg",
    riddle: "Tôi là bào quan màng đơn chứa enzyme tạo ra và phân hủy nước oxygia ($H_2O_2$), chuyên chuyển hóa lipid và khử độc các chất hại. Tôi là ai?",
    name: "Peroxysome",
    english: "Peroxisome",
    structure: "Bào quan màng đơn hình cầu, chứa các enzyme oxi hóa (đặc biệt là catalase để phân hủy $H_2O_2$).",
    function: "Khử độc các chất độc hại xâm nhập vào tế bào (như ethanol), chuyển hóa axit béo chuỗi dài thành năng lượng.",
    explore: "Peroxysome trong tế bào gan giúp phân giải một phần đáng kể lượng cồn từ rượu bia mà bạn vô tình nạp vào cơ thể!",
    accent: "purple",
  },
  {
    id: "centrosome",
    badge: "Trung tâm phân bào",
    image: "img/centrosome.svg",
    riddle: "Tôi gồm một cặp trung tử xếp vuông góc nhau, chuyên điều khiển sự hình thành thoi phân bào để kéo các nhiễm sắc thể khi tế bào chia đôi. Tôi là ai?",
    name: "Trung thể",
    english: "Centrosome",
    structure: "Gồm 2 trung tử (centriole) xếp vuông góc nhau, cấu tạo từ các vi ống nằm trong vùng chất xung quanh trung tử.",
    function: "Là trung tâm tổ chức vi ống (MTOC), đóng vai trò cốt lõi trong việc hình thành thoi phân bào giúp phân chia NST đều đặn khi tế bào phân chia.",
    explore: "Trung thể vắng mặt ở hầu hết các loài thực vật bậc cao; thực vật phân chia tế bào bằng cách hình thành vách ngăn (cell plate) thay vì dùng thoi trung thể!",
    accent: "zinc",
  },
  {
    id: "cilia-flagella",
    badge: "Bộ phận di động",
    image: "img/cilia-flagella.svg",
    riddle: "Chúng tôi là các phần phụ kéo dài bề mặt tế bào: cái thì ngắn, dày đặc như mái chèo; cái thì dài, uyển chuyển như chiếc roi giúp tế bào bơi lội. Chúng tôi là ai?",
    name: "Lông và roi",
    english: "Cilia & Flagella",
    structure: "Cấu trúc hình ống đặc trưng sắp xếp theo kiểu '9 + 2' vi ống bên trong, bao bọc bởi màng sinh chất.",
    function: "Giúp tế bào di chuyển (như tinh trùng có roi) hoặc đẩy dịch chuyển dọc bề mặt mô (như lông rung trong biểu mô khí quản đẩy bụi ra ngoài).",
    explore: "Hút thuốc lá làm tê liệt hệ thống lông rung ở khí quản, khiến bụi bẩn và chất độc ứ đọng gây ra các bệnh hô hấp kinh điển!",
    accent: "cyan",
  },
  {
    id: "cell-junctions",
    badge: "Mối nối giữa các tế bào",
    image: "img/cell-junctions.svg",
    riddle: "Chúng tôi là các cấu trúc kết nối các tế bào lân cận trong mô, tạo thành hàng rào khít, điểm bám vững chắc hoặc đường hầm trao đổi thông tin. Chúng tôi là ai?",
    name: "Mối nối giữa các tế bào",
    english: "Cell Junctions",
    structure: "Gồm các loại: Mối nối khít (tight junctions), thể liên kết (desmosomes), và cầu liên bào / mối nối khe (gap junctions / plasmodesmata).",
    function: "Gắn kết các tế bào thành mô bền vững, ngăn rò rỉ dịch giữa các tế bào hoặc tạo kênh truyền tín hiệu, ion trực tiếp giữa các tế bào.",
    explore: "Mối nối khít ở da tạo thành lớp rào chắn không thấm nước hoàn hảo, giúp bạn không bị phồng rộp hoặc ngấm nước khi tắm bơi lâu!",
    accent: "blue",
  },
  {
    id: "extracellular-matrix",
    badge: "Chất nền động vật",
    image: "img/extracellular-matrix.svg",
    riddle: "Tôi là mạng lưới các phân tử glycoprotein (chủ yếu là collagen) bao phủ bên ngoài màng tế bào động vật, giúp liên kết mô và truyền tín hiệu. Tôi là ai?",
    name: "Chất nền ngoại bào",
    english: "Extracellular Matrix (ECM)",
    structure: "Hợp chất phức tạp gồm các sợi glycoprotein (collagen, fibronectin) liên kết với các phân tử proteoglycan.",
    function: "Nâng đỡ cơ học cho mô, liên kết các tế bào lại với nhau, điều hòa hành vi tế bào và truyền tín hiệu từ môi trường ngoài vào trong tế bào.",
    explore: "Collagen trong chất nền ngoại bào chiếm tới khoảng 45% tổng lượng protein trong cơ thể người, giữ cho da căng mịn và xương khớp dẻo dai!",
    accent: "indigo",
  },
];

const state = {
  cards: [...ORGANELLES],
  index: 0,
  flipped: false,
  learned: new Set(),
  sound: true,
};

let audioCtx = null;
let paintTimer = 0;
let imageToken = 0;

const flashcard = document.getElementById("flashcard");
const cardBack = document.getElementById("card-back");
const faceBodies = document.querySelectorAll(".face-body");
const cardCounter = document.getElementById("card-counter");
const progressBar = document.getElementById("progress-bar");
const progressBarFill = document.getElementById("progress-bar-fill");
const badgeText = document.getElementById("organelle-badge-text");
const organelleImage = document.getElementById("organelle-image");
const imageFallback = document.getElementById("image-fallback");
const riddleContent = document.getElementById("riddle-content");
const favoriteToggleBtn = document.getElementById("favorite-toggle-btn");
const organelleName = document.getElementById("organelle-name");
const backOrganelleEnglish = document.getElementById("back-organelle-english");
const organelleStructure = document.getElementById("organelle-structure");
const organelleFunction = document.getElementById("organelle-function");
const organelleExplore = document.getElementById("organelle-explore");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const flipBtn = document.getElementById("flip-btn");
const flipBtnText = document.getElementById("flip-btn-text");
const shuffleBtn = document.getElementById("shuffle-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const thumbnailsContainer = document.getElementById("thumbnails-container");
const learnedCountDisplay = document.getElementById("learned-count-display");
const totalCardsCountDisplay = document.getElementById("total-cards-count-display");
const resetProgressBtn = document.getElementById("reset-progress-btn");
const helpBtn = document.getElementById("help-btn");
const helpModal = document.getElementById("help-modal");
const closeHelpBtn = document.getElementById("close-help-btn");
const helpModalOk = document.getElementById("help-modal-ok");

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function ensureAudio() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) audioCtx = new Ctx();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function tone({ frequency, endFrequency, duration, type = "sine", gain = 0.05, delay = 0 }) {
  if (!state.sound) return;
  try {
    const ctx = ensureAudio();
    if (!ctx) return;
    const start = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    if (endFrequency) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(endFrequency, 1), start + duration);
    }
    amp.gain.setValueAtTime(gain, start);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(amp);
    amp.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  } catch (error) {
    state.sound = false;
  }
}

function playSound(kind) {
  if (kind === "flip") {
    tone({ frequency: 520, endFrequency: 240, duration: 0.09, gain: 0.045 });
    return;
  }
  if (kind === "shuffle") {
    tone({ frequency: 440, duration: 0.06, gain: 0.04 });
    tone({ frequency: 660, duration: 0.07, gain: 0.04, delay: 0.08 });
    return;
  }
  if (kind === "mark") {
    tone({ frequency: 660, endFrequency: 880, duration: 0.1, gain: 0.04 });
    return;
  }
  tone({ frequency: 680, duration: 0.045, type: "triangle", gain: 0.03 });
}

function applyAccent(card) {
  const toneSet = ACCENTS[card.accent] || ACCENTS.emerald;
  const root = document.documentElement;
  root.style.setProperty("--accent", toneSet.hex);
  root.style.setProperty("--accent-soft", toneSet.soft);
  root.style.setProperty("--accent-text", toneSet.text);
}

function setFlipLabel() {
  flipBtnText.textContent = state.flipped ? "Xem mặt trước" : "Lật mặt thẻ";
  cardBack.setAttribute("aria-hidden", state.flipped ? "false" : "true");
}

function updateProgress() {
  const total = state.cards.length;
  const current = state.index + 1;
  cardCounter.textContent = `${current} / ${total}`;
  progressBarFill.style.width = `${(current / total) * 100}%`;
  progressBar.setAttribute("aria-valuemax", String(total));
  progressBar.setAttribute("aria-valuenow", String(current));
  totalCardsCountDisplay.textContent = String(total);
}

function syncStar() {
  const learned = state.learned.has(state.cards[state.index].id);
  favoriteToggleBtn.classList.toggle("is-on", learned);
  favoriteToggleBtn.setAttribute("aria-pressed", String(learned));
  favoriteToggleBtn.title = learned ? "Bỏ đánh dấu đã thuộc" : "Đánh dấu đã thuộc";
  favoriteToggleBtn.setAttribute("aria-label", favoriteToggleBtn.title);
  learnedCountDisplay.textContent = String(state.learned.size);
}

function showFallback(card) {
  organelleImage.classList.add("is-hidden");
  imageFallback.classList.add("is-shown");
  imageFallback.innerHTML = `<strong>${escapeHtml(card.name)}</strong><span>Không tải được ảnh minh họa trong thư mục img.</span>`;
}

function showImage(card) {
  const token = ++imageToken;
  organelleImage.classList.remove("is-hidden");
  imageFallback.classList.remove("is-shown");
  organelleImage.alt = `Ảnh minh họa ${card.name}`;
  organelleImage.onload = () => {
    if (token !== imageToken) return;
    organelleImage.classList.remove("is-hidden");
    imageFallback.classList.remove("is-shown");
  };
  organelleImage.onerror = () => {
    if (token !== imageToken) return;
    showFallback(card);
  };
  organelleImage.src = card.image;
}

function paint(card) {
  applyAccent(card);
  badgeText.textContent = card.badge;
  riddleContent.textContent = `“${card.riddle}”`;
  organelleName.textContent = card.name;
  backOrganelleEnglish.textContent = card.english;
  organelleStructure.textContent = card.structure;
  organelleFunction.textContent = card.function;
  organelleExplore.textContent = card.explore;
  showImage(card);
  syncStar();
  faceBodies.forEach((body) => {
    body.classList.remove("is-entering");
    void body.offsetWidth;
    body.classList.add("is-entering");
  });
}

function renderThumbnails() {
  thumbnailsContainer.innerHTML = "";
  state.cards.forEach((card, index) => {
    const toneSet = ACCENTS[card.accent] || ACCENTS.emerald;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `thumb${index === state.index ? " is-active" : ""}`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", index === state.index ? "true" : "false");
    button.style.setProperty("--accent", toneSet.hex);
    button.style.setProperty("--accent-soft", toneSet.soft);
    button.style.setProperty("--accent-text", toneSet.text);
    const marker = state.learned.has(card.id)
      ? '<svg class="thumb-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>'
      : '<span class="thumb-dot" aria-hidden="true"></span>';
    button.innerHTML = `${marker}<span>${escapeHtml(card.name)}</span>`;
    button.addEventListener("click", () => showIndex(index, "nav"));
    thumbnailsContainer.appendChild(button);
  });

  const active = thumbnailsContainer.querySelector(".is-active");
  if (!active) return;
  const left = active.offsetLeft - thumbnailsContainer.clientWidth / 2 + active.clientWidth / 2;
  thumbnailsContainer.scrollTo({ left: Math.max(left, 0), behavior: "smooth" });
}

function showIndex(index, sound) {
  const total = state.cards.length;
  state.index = (index + total) % total;
  updateProgress();
  renderThumbnails();
  if (sound) playSound(sound);

  const reveal = () => paint(state.cards[state.index]);
  window.clearTimeout(paintTimer);
  if (state.flipped) {
    state.flipped = false;
    flashcard.classList.remove("is-flipped");
    setFlipLabel();
    paintTimer = window.setTimeout(reveal, 360);
    return;
  }
  reveal();
}

function toggleFlip() {
  state.flipped = !state.flipped;
  flashcard.classList.toggle("is-flipped", state.flipped);
  setFlipLabel();
  playSound("flip");
}

function toggleLearned() {
  const id = state.cards[state.index].id;
  if (state.learned.has(id)) state.learned.delete(id);
  else state.learned.add(id);
  syncStar();
  renderThumbnails();
  playSound("mark");
}

function shuffleCards() {
  const cards = state.cards;
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  showIndex(0, "shuffle");
}

function resetProgress() {
  window.clearTimeout(paintTimer);
  state.learned.clear();
  state.cards = [...ORGANELLES];
  state.flipped = false;
  flashcard.classList.remove("is-flipped");
  setFlipLabel();
  state.index = 0;
  updateProgress();
  paint(state.cards[0]);
  renderThumbnails();
}

function helpIsOpen() {
  return helpModal.classList.contains("is-open");
}

function openHelp() {
  helpModal.hidden = false;
  helpModal.classList.add("is-open");
  helpModalOk.focus();
}

function closeHelp() {
  helpModal.classList.remove("is-open");
  helpModal.hidden = true;
  helpBtn.focus();
}

function setSoundIcon(enabled) {
  soundToggleBtn.innerHTML = `<i data-lucide="${enabled ? "volume-2" : "volume-x"}" class="w-5 h-5"></i>`;
  soundToggleBtn.classList.toggle("is-off", !enabled);
  soundToggleBtn.setAttribute("aria-pressed", String(enabled));
  soundToggleBtn.title = enabled ? "Tắt âm thanh" : "Bật âm thanh";
  refreshIcons();
}

flashcard.addEventListener("click", (event) => {
  if (event.target.closest("button")) return;
  const selection = window.getSelection();
  if (selection && selection.toString().length > 0) return;
  toggleFlip();
});

flipBtn.addEventListener("click", toggleFlip);
nextBtn.addEventListener("click", () => showIndex(state.index + 1, "nav"));
prevBtn.addEventListener("click", () => showIndex(state.index - 1, "nav"));
shuffleBtn.addEventListener("click", shuffleCards);
favoriteToggleBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleLearned();
});
resetProgressBtn.addEventListener("click", resetProgress);

soundToggleBtn.addEventListener("click", () => {
  state.sound = !state.sound;
  setSoundIcon(state.sound);
  if (state.sound) playSound("nav");
});

helpBtn.addEventListener("click", openHelp);
closeHelpBtn.addEventListener("click", closeHelp);
helpModalOk.addEventListener("click", closeHelp);
helpModal.addEventListener("click", (event) => {
  if (event.target === helpModal) closeHelp();
});

window.addEventListener("keydown", (event) => {
  if (helpIsOpen()) {
    if (event.key === "Escape") closeHelp();
    return;
  }
  if (event.target.closest && event.target.closest("button") && event.code === "Space") return;

  if (event.code === "Space") {
    event.preventDefault();
    toggleFlip();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showIndex(state.index + 1, "nav");
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    showIndex(state.index - 1, "nav");
  } else if (event.key.toLowerCase() === "s" && !event.metaKey && !event.ctrlKey && !event.altKey) {
    toggleLearned();
  }
});

function boot() {
  totalCardsCountDisplay.textContent = String(state.cards.length);
  updateProgress();
  paint(state.cards[0]);
  renderThumbnails();
  setFlipLabel();
  refreshIcons();
}

boot();
