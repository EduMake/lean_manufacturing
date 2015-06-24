# Lean Manufacturing Game / Simulation

## Objective

To allow students to design a Lean Manfacturing process for making a simple product. 
And implement and test it, using Andon princples.

## Target Hardware
* Raspberry Pi for web server and database - ubiqiutous and cheap and reduces load on IT department.
* MS Surface RT tablets - we have them and they will do buttons well

## The equipment
* System
  * Network where all devices can communicate
  * Raspberry Pi
* Manager
  * Tablet 
* Production Cells x 4
  * Table space
  * Tablet
  * Red A4 Paper labeled "Transfer Point"
* QA
  * Tablet
  * Scales or other measuring devices
  
## The process

### Before Session
* Setup RPi
* Test Tablets can reach RPi front pages 
  * Have a socket test on the front page as well
  * an a HTML audio test
* Layout the equipment

### Register the Tablets
* "Manager" Tablet go to front page
  * Clicks "Manage New Line" goes to "Manage New Line" Page
  * This adds "Join Line 1 as Cell 3" (1-4) and "Join Line 1 as Quality Assurance" buttons to the front pages
* "Cell" Tablets (x 4) go front page
  * Displays "Join Line 1 as Cell 3" (1-4) .... buttons
  * Click one goes to "Cell" Page  - which has guide to the next bit to start with 
* "Quality Assurance" Tablet go to front page
  * Displays "Join Line 1 as Quality Assurance" .... buttons
  * Click one goes to "Quality Assurance" Page - which has guide to the next bit to start with 

### The Game - Prose ??

The Manager tablet for each line sets the parameters for the line and when they have a full team starts sets the parameters for the next run either a "Trial" or "Production"  run.

A "Trial Run" has count up timers and a "Task Finished" button on each cell so they can indicate they have their finished peice in the Red area.

Each cell also has a "Process Issue" button
The timer being hit on the first process triggers the second timer to start (unless second has a process running) etc.

When the initial andon is activated, usually an audio alarm is played to alert the manager of that particular cell.
Is the sound per line or per cell ?

If "Process Issue" button hit then "Manager Arrived" button displayed, if "Manager Arrived" not hit in the time trigger send "Manager Failed to Arrive" which sends out  "Stop Production" to the line.
"Process Issue" also triggers a message on the managers tablet

When "Manager Arrived"  display "Stop Production" and "Issue Resolved" and mutes the alarm to signal they are trying to resolve the issue.

When the peice gets to the QA area, they weigh it and enter the weight in the form, (do they also test its movement ?)
And when that form is sent it sends an "Item Complete" message

That checks against the run size and if we have hit the end of the run it sends a "Run Complete" to the line.

For "Production Run" the timer countsdown from the "Cell Time Limit" set on the run and everybody starts the next item (if it is in their incoming red zone, if not hit the "Process Issue" button). 



### The Game - in system chunks
* Manager on "Manage New Line" Page 
  * Enters name of product
  * Display shows number of cells / QA registered
  * Picks sound effects theme (needs to be an effect for each cell in each line so if they are in themes should be easy to id the line and then cell) (as each comes on line there sound goes off??)
  * And when they have a full team (manual decision) they hit the "Plan Run" button??
  * "Plan Run " Form 
    * "Run Type" drop down "Trial" of "Producution"
    * Number to be produced
    * QA limits ??
    * "Cell Time Limit" for production run
    * Displays Buttons for "Start Trial Run" "Start Production Run" (Changes with drop down)
* "Trial Run"
  * Managers Page
    * count up timer for whole process
    * Big stop button
  * Cell Page
    * Line and Cell Number at Top
    * Count up timer started by previous cell
    * "Process Issue" and "Task Finished" buttons (taking up most of the screen)
    * if "Process Issue" hit then "Manager Arrived" button displayed, and timer started (on server if possible)
    * "Process Issue" also triggers a message on the managers tablet
    * if "Manager Arrived" not hit in the time trigger send "Manager Failed to Arrive" which sends out  "Stop Production" to the line.
    * When "Manager Arrived"  display "Stop Production" and "Issue Resolved" and mutes the alarm to signal they are trying to resolve the issue.
    *  If "Stop Production" recieved from other cell carry on until end of item and then "Halt"
 * Production Run
  * Count down timer instead every thing on the same amount (done from server if i can)
  * Plays alarm noises when time up


### Teachers page
* CSV outputs - per line 
* Live status and d3js charts of the data so far
* Reports


## Data Design
Will go NoSQL / document based
* document for current lines
* document per Run

##Software design
* Node.js
* Express
* Socket.io
* handlebars less complex than angluar
* nosqlite or mongo

Socket.io


## To Think About
    Statistical Process Control


### Early database design
Product

    Product ID
    Product Name
    QA Target Type
    QA Target Value

Production Line

    Line ID
    Line Name

Station

    Station ID
    Line ID
    Station Name

Event Types

    Event Type ID
    Event Name

Event Alarms

    Event Alarm ID
    Event Type ID
    Line ID
    File Name

Production Run

    Run ID
    Line ID
    Start Time
    Running
    Production Target

Events

    Event ID
    Event Type ID
    Run ID
    Station ID
    Time
    QA Value ?????
