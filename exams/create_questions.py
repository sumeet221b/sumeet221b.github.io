for i in range(2000, 2022):
    f = open(f"./{i}-set-1.md", "w")
    f.write("---\n")
    f.write(f"title: GATE CS {i}\n")
    f.write(f"year: {i}\n")
    f.write(f"set: 1\n")
    f.write("---")
    f.close()
