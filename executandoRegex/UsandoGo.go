package main

import (
	"bytes"
	"fmt"
	"regexp"
)

func main(){
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	regex9, _ := regexp.Compile("9")
	fmt.Println(regex9.MatchSring(texto))
	fmt.Println(regex9.FindString(texto))
	fmt.Println(regex9.FindStringIndex(texto))

	regexLetras, _ := regexp.Compile("[a-f]")
	fmt.Println(regexLetras.FindAllString(texto, 4))
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei"))

	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.toUpper)
	fmt.Println(string(resultado))
}
