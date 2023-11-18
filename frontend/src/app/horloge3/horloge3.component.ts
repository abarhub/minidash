import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {debounceTime, fromEvent} from "rxjs";

@Component({
  selector: 'app-horloge3',
  templateUrl: './horloge3.component.html',
  styleUrls: ['./horloge3.component.scss']
})
export class Horloge3Component  implements OnInit,AfterViewInit {


  @ViewChild('clock') clock: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('hour') hour: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('minute') minute: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('second') second: ElementRef<HTMLDivElement> | null = null;
  @ViewChild('section') section: ElementRef<HTMLDivElement> | null = null;

  mythis=this;

  ngOnInit(): void {


  }

  ngAfterViewInit(){
    // if (!window.requestAnimationFrame) {
    //   window.requestAnimationFrame = window.mozRequestAnimationFrame ||
    //     window.webkitRequestAnimationFrame ||
    //     window.msRequestAnimationFrame ||
    //     window.oRequestAnimationFrame ||
    //     function (cb) { setTimeout(cb, 1000/60); };
    // }

    this.setUpFace();
    if(this.hour&&this.minute&&this.second) {
      this.computeTimePositions(this.hour, this.minute, this.second);
    }
    // if(this.section){
    //   //this.section.nativeElement.onresize=((x:GlobalEventHandlers, ev: UIEvent)=>this.setSize());
    //   this.section.nativeElement.onresize=this.toto;
    //   //let myThis=this;
    //   //this.section.nativeElement.onresize=((this:GlobalEventHandlers, ev: UIEvent)=>this.setSize());
    // }
    // $("section").on("resize", setSize).trigger("resize");
    // $("section").resizable({handles: 'e'});
    fromEvent(window, 'resize').pipe(
      debounceTime(200))
      .subscribe(() =>{
          console.log('Window resizing');
          this.setSize();
      }

      );

    setInterval(()=>{
      if(this.hour&&this.minute&&this.second) {
        this.computeTimePositions(this.hour, this.minute, this.second);
      }
    });

  }

  // private toto(this:GlobalEventHandlers, ev: UIEvent): any{
  //   this.mythis.setSize();
  //   // this.setSize();
  // }

  init():void{

    if (!window.requestAnimationFrame) {
      // window.requestAnimationFrame = window.mozRequestAnimationFrame ||
      //   window.webkitRequestAnimationFrame ||
      //   window.msRequestAnimationFrame ||
      //   window.oRequestAnimationFrame ||
      //   function (cb) { setTimeout(cb, 1000/60); };
    }

    // var $h = $("#hour"),
    //   $m = $("#minute"),
    //   $s = $("#second");

  }

  public computeTimePositions(hour:ElementRef<HTMLDivElement>, minute:ElementRef<HTMLDivElement>, second:ElementRef<HTMLDivElement>):void {
    var now = new Date(),
      h = now.getHours(),
      m = now.getMinutes(),
      s = now.getSeconds(),
      ms = now.getMilliseconds(),
      degS, degM, degH;

    degS = (s * 6) + (6 / 1000 * ms);
    degM = (m * 6) + (6 / 60 * s) + (6 / (60 * 1000) * ms);
    degH = (h * 30) + (30 / 60 * m);

    second.nativeElement.style.transform="rotate(" + degS + "deg)";
    minute.nativeElement.style.transform="rotate(" + degM + "deg)";
    hour.nativeElement.style.transform="rotate(" + degH + "deg)";
    // second.css({ "transform": "rotate(" + degS + "deg)" });
    // minute.css({ "transform": "rotate(" + degM + "deg)" });
    // hour.css({ "transform": "rotate(" + degH + "deg)" });

    let myThis=this;

    requestAnimationFrame(function () {
      if(myThis.hour&&myThis.minute&&myThis.second)
        myThis.computeTimePositions(myThis.hour, myThis.minute, myThis.second);
    });
  }


  private setUpFace() {
    for (var x = 1; x <= 60; x += 1) {
      this.addTick(x);
    }

  }

  private htmlToElement(html:string):ChildNode|null {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  private addTick(n:number) {
    var tickClass = "smallTick",
      tickBox = this.htmlToElement("<div class=\"faceBox\"></div>"),
      tick = this.htmlToElement("<div></div>"),
      tickNum:ChildNode|null=null ;

    if (n % 5 === 0) {
      tickClass = (n % 15 === 0) ? "largeTick" : "mediumTick";
      tickNum = this.htmlToElement("<div class=\"tickNum\"></div>");
      if(tickNum&&tickNum instanceof HTMLDivElement){
        let tickNum2=tickNum as HTMLDivElement;
        tickNum2.textContent=""+(n/5);
        tickNum2.style.transform="rotate(-" + (n * 6) + "deg)";
        if (n >= 50) {
          tickNum2.style.left="-0.5em";
        }
      }


      // .text(n / 5).css({ "transform": "rotate(-" + (n * 6) + "deg)" });
      // if (n >= 50) {
      //   tickNum.({"left":"-0.5em"});
      // }
    }


    if(tickBox){
      if(tick!=null&&tick instanceof HTMLDivElement){
        let tick2=tick as HTMLDivElement;
        tick2.classList.add(tickClass);
        tickBox.appendChild(tick2).style.transform="rotate(" + (n * 6) + "deg)";
      }
      if(tickNum){
        tickBox.appendChild(tickNum);
      }
    }
    //   &&tickNum!=null&&tickNum instanceof HTMLDivElement){
    //   let tickNum2=tickNum as HTMLDivElement;
    //   tickNum2.classList.add(tickClass);
    //   tickBox?.appendChild(tickNum2).style.transform="rotate(" + (n * 6) + "deg)";
    // }


    // tickBox.append(tick.addClass(tickClass)).css({ "transform": "rotate(" + (n * 6) + "deg)" });
    // tickBox.append(tickNum);

    if(this.clock&&tickBox){
      this.clock?.nativeElement.append(tickBox);
    }

    // $("#clock").append(tickBox);
  }
  public setSize() {
    let b=document.body;
     let //b2 = $(this), //html, body
      w = b.offsetWidth,
      x = Math.floor(w / 30) - 1,
      px = (x > 25 ? 26 : x) + "px";

    //$("#clock").css({"font-size": px });
    if(this.clock){
      this.clock.nativeElement.style.fontSize=px;
    }

    if (b.offsetWidth !== 400) {
      //setTimeout(function() { $("._drag").hide(); }, 500);
      setTimeout(()=>{
        let drag=document.querySelector("._drag");
        if(drag&&drag instanceof HTMLDivElement){
          let drag2=drag as HTMLDivElement;
          drag2.hidden=true;
        }
      })
    }
  }


/*(function ($) {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (cb) { setTimeout(cb, 1000/60); };
    }

    var $h = $("#hour"),
      $m = $("#minute"),
      $s = $("#second");

    function computeTimePositions($h, $m, $s) {
      var now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds(),
        ms = now.getMilliseconds(),
        degS, degM, degH;

      degS = (s * 6) + (6 / 1000 * ms);
      degM = (m * 6) + (6 / 60 * s) + (6 / (60 * 1000) * ms);
      degH = (h * 30) + (30 / 60 * m);

      $s.css({ "transform": "rotate(" + degS + "deg)" });
      $m.css({ "transform": "rotate(" + degM + "deg)" });
      $h.css({ "transform": "rotate(" + degH + "deg)" });

      requestAnimationFrame(function () {
        computeTimePositions($h, $m, $s);
      });
    }

    function setUpFace() {
      for (var x = 1; x <= 60; x += 1) {
        addTick(x);
      }

      function addTick(n) {
        var tickClass = "smallTick",
          tickBox = $("<div class=\"faceBox\"></div>"),
          tick = $("<div></div>"),
          tickNum = "";

        if (n % 5 === 0) {
          tickClass = (n % 15 === 0) ? "largeTick" : "mediumTick";
          tickNum = $("<div class=\"tickNum\"></div>").text(n / 5).css({ "transform": "rotate(-" + (n * 6) + "deg)" });
          if (n >= 50) {
            tickNum.css({"left":"-0.5em"});
          }
        }


        tickBox.append(tick.addClass(tickClass)).css({ "transform": "rotate(" + (n * 6) + "deg)" });
        tickBox.append(tickNum);

        $("#clock").append(tickBox);
      }
    }

    function setSize() {
      var b = $(this), //html, body
        w = b.width(),
        x = Math.floor(w / 30) - 1,
        px = (x > 25 ? 26 : x) + "px";

      $("#clock").css({"font-size": px });

      if (b.width() !== 400) {
        setTimeout(function() { $("._drag").hide(); }, 500);
      }
    }

    $(document).ready(function () {
      setUpFace();
      computeTimePositions($h, $m, $s);
      $("section").on("resize", setSize).trigger("resize");
      $("section").resizable({handles: 'e'});
    });
  }(jQuery));*/


}
