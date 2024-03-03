import "./homePage.css";

function HomePage() {
  return (
    <>
      <div className="home">
        <div className="title-home">
          <img className="img-home" src="./logo-transparent.webp" alt="logo" />
          <h1>مدارس منارات تبوك الأهلية</h1>
        </div>


        <div className="info-web">
          <p>اختبارات قدرات <br></br>القسم اللفظي</p>
          <p>اعداد الأستاذ عادل عاشور<br></br> مدرب القدرات القسم اللفظي</p>
        </div>
        <div className="owners">
          <p>مدير المدرسة: <br></br>فيصل العطوي</p>
          <p>رئيس مجلس الإدارة:<br></br> إبراهيم بن علي العمري</p>
        </div>
      </div>
    </>
  );
}
export default HomePage;
