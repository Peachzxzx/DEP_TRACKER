from machine import Pin, ADC, PWM
from time import sleep
import network, json, urequests, time
from _thread import start_new_thread as thread


url = 'https://exceed.superposition.pknn.dev/data/15_pill_time'
dataSnooze  = {"Snooze": True}
urlSnooze = "https://exceed.superposition.pknn.dev/data/15_Snooze"
headers = {"content-type":"application/json"}

ssid = 'exceed16_8'
pwd = '12345678'
station = network.WLAN(network.STA_IF)
station.active(True)


headers = {"content-type":"application/json"}
getdata = {}
btn = Pin(23,Pin.IN)
#isfreez = False
stopRGB = False

def Buzzer(alarm):
  buzzer = PWM(Pin(25))       
  if alarm == False:
    for i in range(3):
      buzzer.freq(1)
      sleep(2)
    buzzer.deinit()    
  if alarm == True :
    for i in range(2):
      buzzer.freq(5)
      sleep(1)
    buzzer.deinit()
    
def Rgb(colour):
  global stopRGB, R, G,B
  
  
  while(not stopRGB):
    
    if colour == "r":
      R.value(1)
      G.value(0)
      B.value(0)
      sleep(0.5)
    if colour == "g":
      R.value(0)
      G.value(1)
      B.value(0)
      sleep(0.5)
    if colour == "b":
      R.value(0)
      G.value(0)
      B.value(1)
      sleep(0.5)
    if colour == "w":
      R.value(1)
      G.value(1)
      B.value(1)
      sleep(0.5)
    if colour == "rg":
      R.value(1)
      G.value(1)
      B.value(0)
      sleep(0.5)
    if colour == "rb":
      R.value(1)
      G.value(0)
      B.value(1)
      sleep(0.5)
    if colour == "gb":
      R.value(0)
      G.value(1)
      B.value(1)
      sleep(0.5)    
    R.value(0)
    G.value(0)
    B.value(0)
    sleep(1)
     




def Press_sta(): 
  state_1 = 1
  state_2 = 1
  init = True
  count = 0
  global urlSnooze, dataSnooze, headers, stopRGB
  while True:
    state_1 = state_2
    state_2 = btn.value()
    sleep(0.25)
    if init and state_1 == 1 and state_2 == 0: 
      init = False
      stopRGB = True
    if state_1 == 1 and state_2 == 0: 
      count = 0
    
      
    if state_2 == 0:
      count += 1
      
    if state_1 == 0 and state_2 == 1:
      init = False
      count += 1
  
    if count > 7:
      js = json.dumps({"data": dataSnooze})
      r = urequests.post(urlSnooze, data = js, headers = headers)
      results = r.json()
      print(results)
      stopRGB = True
      return 
R = Pin(18, Pin.OUT)
G = Pin(19, Pin.OUT)
B = Pin(21, Pin.OUT)
R.value(0)
G.value(0)
B.value(0)
count1 = 0
count2 = 0
while(1):
  #isfreez = ''
  #pressed = 'yet'
  while not station.isconnected():
    station.connect(ssid, pwd)
    print('connecting ...')
    sleep(1)   
    if station.isconnected():
      print("connected")
  
  getdata = urequests.get(url).json()
  print(getdata)
  color = getdata['color']
  pill = getdata['pill']
  
  #print(color)
  #print(pill)
  
  count1 = count2
  count2 = getdata['count']
  print(count1)
  print(count2)
  
  
  
  if not (count1 == count2):
    print("GOood")
    stopRGB = False
    thread(Buzzer, [pill])
    thread(Press_sta, [])  
    thread(Rgb, [color])
    
  
  
    
  sleep(1)

