//a script that takes and print any argument given

args = process.argv.slice(2);

index = 0;

while (index < args.length) {
    console.log(args[index]);
    index++;
}
