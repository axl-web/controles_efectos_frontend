const days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

class Calendar {
    constructor(options){
        this.date = options.date || new Date();
        this.container = options.container;
    
        // TO DO: Manejo botones
    
        this.calendarTable = null;
 
    
        this.buildTable();
        this.upDateTable()
    }

    upDateTable(){
        this.calculateDates()

        let firstDayInWeek = this.monthStart.getDay()
        let trs = this.calendarTable.querySelectorAll('tr')
        

        for(var i = 0; i<=5; i++){

            let tr = trs[i]
            let tds = tr.querySelectorAll('td')

            for( var j = 0; j<7; j++){
                let td =tds[j]
                let day = (i*7) + j

                if(day >=firstDayInWeek && (day-firstDayInWeek) < this.monthLength ){
                    td.innerHTML = day - firstDayInWeek +1
                    td.style.borderStyle='solid'
                }
                else{
                    td.style.borderStyle ='none'
                }
                
            }
        } 

        this.container.querySelector('header').innerHTML = `${months[this.date.getMonth()]} - ${this.date.getFullYear()}`


    }

    calculateDates(){
        this.monthStart = new Date(this.date.getFullYear(),this.date.getMonth(),1);
        this.monthEnd = new Date(this.date.getFullYear(),this.date.getMonth() + 1,1);
    
        this.monthLength = Math.floor((this.monthEnd - this.monthStart) / (1000 * 60 * 60 * 24));
    
      }

    buildTable(){
        let table = document.createElement('table');
        let thead = document.createElement('thead');
    
        for (var i = 0; i < 7; i++) {
          let td = document.createElement('td');
          td.innerHTML = days[i];
          thead.appendChild(td);
        }

        for(var i = 0; i<=5; i++){
            let tr = document.createElement('tr')
            for( var j = 0; j<7; j++){
                let td = document.createElement('td')
                tr.appendChild(td)
            }

            table.appendChild(tr)
        } 

        this.calendarTable = table
        table.appendChild(thead)

        let body = document.createElement('div')
        body.classList.add('body')
        body.appendChild(table)

        this.container.classList.add('calendar-style')

        this.container.appendChild(document.createElement('header'))
        this.container.appendChild(body)
    }
   
}