const portalURL = "https://portal.yonsei.ac.kr/main/";
const classURL = "http://ysweb.yonsei.ac.kr:8888/curri120601/curri_new.jsp#top";
const careerURL = "https://career.yonsei.ac.kr";
const spaceURL = "https://space.yonsei.ac.kr";
const calendarURL = "https://www.yonsei.ac.kr/sc/support/calendar.jsp#xxx";
const busURL = "https://ysweb.yonsei.ac.kr/ysbus.jsp";
const seiyonURL = "https://www.seiyon.net";
const yeaglesURL = "https://www.yeagles.com";
const GitRepoURL = "https://github.com/budlebee/GoYonsei";


function openURLInNewTab(url) {
    chrome.tabs.create({ url });
}

document.getElementById('clickPortal').addEventListener('click', () => { openURLInNewTab(portalURL) }, false);
document.getElementById('clickClass').addEventListener('click', () => { openURLInNewTab(classURL) }, false);
document.getElementById('clickCareer').addEventListener('click', () => { openURLInNewTab(careerURL) }, false);
document.getElementById('clickSpace').addEventListener('click', () => { openURLInNewTab(spaceURL) }, false);
document.getElementById('clickCalendar').addEventListener('click', () => { openURLInNewTab(calendarURL) }, false);
document.getElementById('clickBus').addEventListener('click', () => { openURLInNewTab(busURL) }, false);
document.getElementById('clickSeiyon').addEventListener('click', () => { openURLInNewTab(seiyonURL) }, false);
document.getElementById('clickYeagles').addEventListener('click', () => { openURLInNewTab(yeaglesURL) }, false);

document.getElementById('clickEasterEgg').addEventListener('click', () => { openURLInNewTab(GitRepoURL) }, false);
