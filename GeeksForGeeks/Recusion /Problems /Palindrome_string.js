function pal(s,i=0,j=s.length -1) { 
        // code here
        if(i>=j)return true
        return ((s[i]==s[j]) && pal(s,i+1,j-1))
    }
