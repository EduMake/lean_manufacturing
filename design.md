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
* Layout the equipment

### Register the Tablets
* "Manager" Tablet go to front page
  * Clicks "Manage New Line" goes to "Manage New Line" Page
  * This adds "Join Line 1 as Cell 3" (1-4) and "Join Line 1 as Quality Assurance" buttons to the front pages
* "Cell" Tablets go front page
  * Displays "Join Line 1 as Cell 3" (1-4) .... buttons
  * Click one goes to "Cell" Page  - which has guide to the next bit to start with 
* "Quality Assurance" Tablets go front page
  * Displays "Join Line 1 as Quality Assurance" .... buttons
  * Click one goes to "Quality Assurance" Page - which has guide to the next bit to start with 

### The Game - Prose ??

The Manager tabket for each line sets the parameters for the next run.
And when they have a full team starts a Trial run.
A Trial run mode with count up timers and button on each cell so they can indicate they have finished
Each cell also has a "Problem" button




### The Game - in system chunks
* Manager on "Manage New Line" Page 
  * Enters name of product
  * Form for QA limits ??
  * Picks sound effects ??
  * Display shows number of cells registered
  * Displays Buttons for "Start Trial Run" "Start Production Run"
* "Trial Run"
  * Managers Page
    * count up timer for whole process
    * Big stop button
  * Cell Page
    * 


## Unformatted notes to be added

An initial Trial run mode with count up timers.
Production mode has countdown timers
Excel / csv outputs - per line available from the server separate to the line interfaces

Andon System
• Worker manually activates the andon system to notify the manager there is a process issue
• Manager manually activates response to andon system to signal issue is being investigated
Then either
• Manager stops the production line as process issue cannot be resolved, or
• Manager resets the system to signal issue is resolved
When the initial andon is activated, usually an audio alarm is played to alert the manager of that particular cell. When the manager responds it mutes the alarm to signal they are trying to resolve the issue.
Any way we can record all the data would be great. Could we even record response times?

I think we should keep task finished separate. We could time each cell separately along with the overall production time.


Process Buttons on Web page for each stage.
    API for buttons to Database
        process finished
        Problem encountered
        Manager arrived
        Problem cleared
    Plays alarm noises when
        time up
        Problem encountered
        Problem cleared
    QA checks entered into DB
    Statistical Process Control
    Reports


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
