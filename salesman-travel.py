def travel(r, zipcode):  # #2
    streets = []
    houses = []
    addresses = r.split(",")
    for x in addresses:
        if " ".join(x.split()[-2:]) == zipcode:
            streets.append(" ".join(x.split()[1:-2]))
            houses += x.split()[:1]
    return "{}:{}/{}".format(zipcode, ",".join(streets), ",".join(houses))
