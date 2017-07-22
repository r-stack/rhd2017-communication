from firebase import firebase
from bluepy.btle import Scanner, DefaultDelegate
from datetime import datetime

SATOSHI_ADDR = '24:71:89:e7:87:85'
KASUMI_ADDR = '24:71:89:1a:3f:86'



class ScanDelegate(DefaultDelegate):
    def __init__(self):
        DefaultDelegate.__init__(self)

def upload_position(name, place):
    base = firebase.FirebaseApplication('https://r-stack-2017-com.firebaseio.com/')
    result = base.put('/friends', '/'+name, {'place' : place})
    print (result)

def convert_to_upload_data(macaddr, rssi):
    if (macaddr == SATOSHI_ADDR):
        name = 'satoshi'
    elif (macaddr == KASUMI_ADDR):
        name = 'kasumi'

    now = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    print ("name: %s, rssi: %d, now: %s" % (name, rssi, now))
    if (rssi < 70):
        place = 'classroom'
    elif(rssi < 85):
        place = 'library'
    else:
        place = 'ground'

    return [name, place]

def sensortag_scan():
    scanner = Scanner().withDelegate(ScanDelegate())
    satoshi_data = [0,0,0,0,0]
    kasumi_data = [0,0,0,0,0]
    i = 0
    while 1:
        devices = scanner.scan(1.0)
        for dev in devices:
            if (dev.addr == SATOSHI_ADDR):
                satoshi_data[i] = abs(dev.rssi)
                print "Device %s (%s), RSSI=%d dB" % (dev.addr, dev.addrType, abs(dev.rssi))
                name, place = convert_to_upload_data(dev.addr, sum(satoshi_data)/len(satoshi_data))
                upload_position(name, place)
            if (dev.addr == KASUMI_ADDR):
                kasumi_data[i] = abs(dev.rssi)
                print "Device %s (%s), RSSI=%d dB" % (dev.addr, dev.addrType, abs(dev.rssi))
                name, place = convert_to_upload_data(dev.addr, sum(kasumi_data)/len(kasumi_data))
                upload_position(name, place)
        i+=1
        if (i >= 5):
            i=0

if __name__ == "__main__":
#    upload_position('satoshi', 'ground')
    sensortag_scan();
